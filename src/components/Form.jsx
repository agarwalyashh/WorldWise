import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../App";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigate = useNavigate()
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const {lat,lng} = useUrlPosition(); 
  const [emoji, setEmoji] = useState("");
  const {setCities}=useContext(Context);


  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log("data"+data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          console.log(err);
        } 
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();
  
    if (!cityName || !date) return;
  
    const newCity = {
      id: Date.now().toString(), // Ensure the id is unique
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
  
    try {
      // Save the new city to json-server
      const res = await fetch("http://localhost:8000/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
  
      if (!res.ok) throw new Error("Failed to add city");
  
      // Optionally, you can update local state after successfully adding the city
      const savedCity = await res.json();
      setCities((prevCities) => [...prevCities, savedCity]);
    } catch (error) {
      console.error(error.message);
    } finally {
      navigate("/app/cities");
    }
  }
  

  return (
    <form className="bg-gray-500 rounded-lg p-4 mt-10" onSubmit={handleSubmit}>
      <div className="text-start">
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="text-black mt-2" 
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className="text-start">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="text-black mt-2"
        />
      </div>

      <div className="text-start">
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="text-black mt-2"
        />
      </div>

      <div className="flex justify-between">
        <button className="p-2 bg-gray-700 mt-4 rounded-full" type="submit">Add</button>
        <button  className="p-2 bg-gray-700 mt-4 rounded-full" onClick={(e)=>{
            e.preventDefault()
            navigate(-1)
        }}>&larr; Back</button> {/* navigates to prev page */}
      </div>
    </form>
  );
}

export default Form;
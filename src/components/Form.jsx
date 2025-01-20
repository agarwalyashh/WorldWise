import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate()
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  return (
    <form className="bg-gray-500 rounded-lg p-4 mt-10">
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
        <button className="p-2 bg-gray-700 mt-4 rounded-full">Add</button>
        <button  className="p-2 bg-gray-700 mt-4 rounded-full" onClick={(e)=>{
            e.preventDefault()
            navigate(-1)
        }}>&larr; Back</button> {/* navigates to prev page */}
      </div>
    </form>
  );
}

export default Form;
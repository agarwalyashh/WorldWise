import { useContext } from "react";
import {Context} from '../App'
import Loader from "./Loader";
import { NavLink, useNavigate } from "react-router-dom";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

    
function CityList()
{
    const {cities,isLoading,setCities} = useContext(Context);
    const navigate = useNavigate();

    async function handleClick(e,id)
    {
        e.preventDefault();
        try {
            // Save the new city to json-server
            await fetch(`http://localhost:8000/cities/${id}`, {
            method: "DELETE",
            });
        
            setCities((prevCities) => prevCities.filter(city=>city.id!==id));
          } catch (error) {
            console.error(error.message);
          } finally {
            navigate("/app/cities");
          }
        }
    if(isLoading)
        return <Loader/>
    return(
        <ul className="grid mt-10">
            {cities.map((city)=>
           <NavLink key={city.id} to={`${city.id}?lat=${city.position.lat}&long=${city.position.lng}`}>
             <li className="flex justify-between w-[40rem] bg-gray-600 gap-5 border-l-4 border-green-500 mt-5 rounded-lg p-4 text-2xl">
                <div className="flex gap-5">
                    <span style={{ fontFamily: "Noto Color Emoji" }}>{city.emoji}</span>
                    <p>{city.cityName}</p>
                </div>
                <div className="flex gap-3">
                    <p>({formatDate(city.date)})</p>
                    <button className="bg-black rounded-full h-8 place-content-center w-6 hover:bg-orange-400"
                    onClick={(e)=>handleClick(e,city.id)}>x</button>
                </div>
            </li>
           </NavLink>)}
        </ul>
    )
}


export default CityList
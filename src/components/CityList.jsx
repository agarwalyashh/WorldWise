/* eslint-disable react/prop-types */
const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

import { NavLink } from "react-router-dom";
function CityList({cities,isloading})
{

    if(isloading)
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
                    <button className="bg-black rounded-full h-8 place-content-center w-6">x</button>
                </div>
            </li>
           </NavLink>)}
        </ul>
    )
}

function Loader()
{
    return(
        <div className="h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-transparent to-gray-400 mask-radial animate-spin"></div>
        </div>
    )
}
export default CityList
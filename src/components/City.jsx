import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";


const formatDate = (date) => {
    if (!date || isNaN(new Date(date).getTime())) {
      return "Invalid date"; // Provide a fallback for invalid dates
    }
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long"
    }).format(new Date(date));
  };

const capitalize =(name)=>{
    if(!name)
        return
    return name.toUpperCase()


}
function City()
{
    const [currentCity,setCurrCity]=useState({});
    const [isLoading,setisLoading] = useState(false)
    const {id} = useParams(); // it gives the :id , called params
    const navigate = useNavigate()

    useEffect(function (){
        async function getCity() {
            try {
                setisLoading(true);
                const res = await fetch(`http://localhost:8000/cities/${id}`);
                const data = await res.json();
                
                setCurrCity(data);
            } catch {
                console.log("Error occured");
            }
            finally{
                setisLoading(false)
            }
        }
        getCity()
    },[id,setisLoading])

    if (isLoading)
     return <Loader/>
    return(
        <div>
            <div className="grid bg-gray-600 gap-8 w-[40rem] p-8 mt-10 rounded-lg">
            <div className="text-start flex flex-col gap-2">
                <h1 className="text-xl text-gray-400">CITY NAME</h1>
                <p className="text-2xl"><span>{currentCity.emoji}</span> {currentCity.cityName}</p>
            </div>
            <div className="text-start flex flex-col gap-2">
                <h1 className="text-xl text-gray-400"> YOU WENT TO {capitalize(currentCity.cityName)} ON </h1>
                <p className="text-2xl">{formatDate(currentCity.date)}</p>
            </div>
            {currentCity.notes && <div className="text-start flex flex-col gap-2">
                <h1 className="text-xl text-gray-400"> YOUR NOTES </h1>
                <p className="text-2xl">{currentCity.notes}</p>
            </div>}
            </div>
            <button  className="p-4 bg-gray-600 mt-4 rounded-lg text-2xl" onClick={(e)=>{
                e.preventDefault()
                navigate(-1)
            }}>&larr; Back</button>
        </div>
    )
}



export default City
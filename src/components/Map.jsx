/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from "react-leaflet"
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
import { useEffect } from "react";
import {useGeoLocation} from "../hooks/useGeoLocation"
import {useUrlPosition} from "../hooks/useUrlPosition"

function Map()
{ 
    const {cities} = useContext(Context);
    

    const [mapPosition,setMapPosition]=useState([40,0])
  
    const {
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition,
      } = useGeoLocation();

      const [mapLat,mapLong] = useUrlPosition()
      

      useEffect(
        function () {
          if (mapLat && mapLong) setMapPosition([mapLat, mapLong]);
        },
        [mapLat, mapLong]
      );
    
      useEffect(
        function () {
          if (geolocationPosition)
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
        },
        [geolocationPosition]
      );

    return(
        <div className='bg-gray-600 flex flex-col w-[50rem] p-10 justify-center items-center h-[60rem]'>
            <button className="text-black bg-green-600 p-3 text-xl mb-4" onClick={getPosition}>{isLoadingPosition?"LOADING...":"USE YOUR POSITION"}</button>
           <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className="h-[60rem] w-full">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {cities.map((city)=>(
            <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
            <Popup className="flex gap-3 border-l-4 rounded-lg border-green-500 text-xl">
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
            </Popup>
            </Marker>))}
            <ChangeCenter position={mapPosition}/>
            <DetectClick/>
        </MapContainer>
        </div>
    )
}
// the center in the MapContainer component is not reactive by default in leaflet, so we need to implement that functionality on our own 

function ChangeCenter({position}){
    const map = useMap();
    map.setView(position,map.getZoom());
    return null; // return is necessary since it is a component but is not needed in our requirement so null.
}

function DetectClick()
{
    const navigate = useNavigate();
    useMapEvents({
        click:(e)=>{
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    })
}

export default Map;
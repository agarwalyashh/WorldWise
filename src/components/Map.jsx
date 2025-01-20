import { useNavigate, useSearchParams } from "react-router-dom";

function Map()
{
    // eslint-disable-next-line no-unused-vars
    const [searchParams,setSearchParams]=useSearchParams();
    const navigate = useNavigate()
    const lat = searchParams.get("lat");
    const long = searchParams.get("long")
    return(
        <div className='bg-gray-600 flex flex-col w-[50rem] p-10 justify-center items-center h-[60rem]'
        onClick={()=>navigate("form")}> {/* iss div pe click karne se form path pe redirected(navigate) ho jaega, might be nested route also */}
            {lat&&<h1>Position : {lat} {long}</h1>}
        </div>
    )
}
export default Map;
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout()
{
    return(
        <div className="flex place-content-center gap-5 mt-10">
            <Sidebar/>
            <Map/>
        </div>
    )
}
export default AppLayout;
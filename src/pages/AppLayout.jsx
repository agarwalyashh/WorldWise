import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout()
{
    return(
        <div>
            <div className="flex place-content-center gap-5 mt-10">
                <Sidebar/>
                <Map/>
            </div>
            <User/>
        </div>
    )
}
export default AppLayout;
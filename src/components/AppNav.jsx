import { NavLink } from "react-router-dom"

function AppNav(){
    return(
        <nav>
            <ul className="flex text-2xl gap-2 mt-10">
                <li className="bg-gray-600 p-2 rounded-md">
                    <NavLink to="cities">CITIES</NavLink>
                </li>
                <li className="bg-gray-600 p-2 rounded-md">
                    <NavLink to="countries">COUNTRIES</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default AppNav
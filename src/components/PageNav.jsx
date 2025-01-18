import { NavLink } from "react-router-dom"
import logo from '../../public/logo.png'

function PageNav(){
    return(
        <nav>
            <div className="flex text-2xl gap-6 justify-between p-8">
                <div className="float-left">
                    <NavLink to="/">
                    <img src={logo} alt="logo" className="h-20"></img>
                    </NavLink> {/*Using NavLink instead of lin gives the particular url we are in a class name of active, so additional functionality*/}
                </div>
                <ul className="float right flex gap-10">
                    <li className="mt-5">
                        <NavLink to="/pricing">PRICING</NavLink>
                    </li>
                    <li className="mt-5">
                        <NavLink to="/product">PRODUCT</NavLink>
                    </li>
                    <li className="mt-5">
                        <NavLink to="/login">LOG IN</NavLink>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}
export default PageNav
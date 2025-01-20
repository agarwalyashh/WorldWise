import { Outlet } from 'react-router-dom';
import logo from '../../public/logo.png'    
import AppNav from './AppNav';
function Sidebar()
{
    return(
        <div className='bg-gray-800 flex flex-col w-[50rem] p-10 justify-center items-center h-[60rem]'>
            <img src={logo} alt="logo" className="h-24 w-80"></img>
            <AppNav/>
            <Outlet/> {/* For nested routes, acts like children prop */}
            <footer className='text-2xl mt-auto'>
                <p>© Copyright {new Date().getFullYear()} by WorldWise inc.</p>
            </footer>
        </div>
    )
}
export default Sidebar;
import { useState } from "react"
import PageNav from "../components/PageNav"
import { useAuth } from "../contexts/FakeAuthentication"
import { useEffect } from "react"
import {useNavigate } from "react-router-dom"

function Login()
{
    const [email,setEmail]=useState("agarwalyashhh004@gmail.com")
    const [password,setPassword]=useState("yash123")
    const {login,isAuthenticated} = useAuth();
    const navigate = useNavigate();

    function handlesubmit(e)
    {
        e.preventDefault();
        if(email&&password)
            login({email,password});
    }

    useEffect(function(){
        if(isAuthenticated)
            navigate("/app",{replace:true});
    },[isAuthenticated,navigate])

    return(
        <div className="bg-gray-800 h-[70rem]">
            <PageNav/>
            <form className="p-28 flex justify-center" onSubmit={handlesubmit}>
                <div className="grid gap-4 w-[40rem] bg-gray-600 p-12 h-[25rem] rounded-lg">
                    <label className="text-left">Email address</label>
                    <input type="email" className="text-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label className="text-left">Password</label>
                    <input type="password" className="text-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="p-2 text-2xl bg-green-500 text-black w-24 rounded-md place-self-center mt-2">LOGIN</button>
                </div>
            </form>
        </div>
    )
}
export default Login
import { useState } from "react"
import PageNav from "../components/PageNav"

function Login()
{
    const [email,setEmail]=useState("agarwalyashhh004@gmail.com")
    const [password,setPassword]=useState("yash123")
    return(
        <div className="bg-gray-800 h-[70rem]">
            <PageNav/>
            <div className="p-28 flex justify-center">
                <div className="grid gap-4 w-[40rem] bg-gray-600 p-12 h-[25rem] rounded-lg">
                    <label className="text-left">Email address</label>
                    <input type="email" className="text-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label className="text-left">Password</label>
                    <input type="password" className="text-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="p-2 text-2xl bg-white text-black w-20 place-self-center mt-2">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login
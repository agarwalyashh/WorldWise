/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();

const fake_user = {
    name: "Yash",
    email : "agarwalyashhh004@gmail.com",
    password : "yash123"
}

const initialState = {
    user : null,
    isAuthenticated : false
}

function reducer(state,action)
{
    switch(action.type){
        
        
        case 'login':
        return {...state,user:action.payLoad,isAuthenticated:true}
        
        case 'logout':
        return {...state,user:null,isAuthenticated:false}

        default :
        throw new Error("Unknown action")
    }
}

function AuthProvider({children})
{
    const [{user,isAuthenticated},dispatch]=useReducer(reducer,initialState);

    function login({email,password}){
        if(email==fake_user.email && password==fake_user.password)
            dispatch({type:'login',payLoad:fake_user})
    }

    function logout()
    {
        dispatch({type:'logout'})
    }

    return <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>{children}</AuthContext.Provider>
}

function useAuth()
{
    const context = useContext(AuthContext);
    if(context===undefined)
        throw new Error("AuthContext was outside AuthProvider")
    return context;
}
export {AuthProvider,useAuth}
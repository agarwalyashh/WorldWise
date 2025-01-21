import './App.css'
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import { useState } from 'react'
import { useEffect } from 'react'
import City from './components/City'
import Form from './components/Form'
import { createContext } from 'react'

export const Context = createContext()

function App() {
  
  const [cities,setCities] = useState([])
  const [isLoading,setisLoading]=useState(false);

  useEffect(function(){
    async function fetchCities() {
      try {
        setisLoading(true);
        const res = await fetch('http://localhost:8000/cities');
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("Error occured");
      }
      finally{
        setisLoading(false)
      }
    }
    fetchCities()
  },[])

  return (
    <Context.Provider value={{cities,isLoading,setisLoading,setCities}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/> 
        <Route path="login" element={<Login/>}/> 
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Navigate replace to="cities"/>}/> {/* This route is always nested with app if no other route is nested, default hai ye. And therefore, Navigate component by React acts as a redirect which in this case navigates to cities path, and hence displaying the citylist by default*/}
          {/** Replace word is important above */}
          <Route path="cities" element={<CityList/>}/>
          <Route path="cities/:id" element={<City/>}/>
          <Route path="countries" element={<CountryList/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
        {/* give path="*" and then a corresponding element which is selected when none of the above paths match */}
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App

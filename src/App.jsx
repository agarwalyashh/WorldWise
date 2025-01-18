import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/> 
        <Route path="login" element={<Login/>}/> 
        <Route path="app" element={<AppLayout/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        {/* give path="*" and then a corresponding element which is selected when none of the above paths match */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

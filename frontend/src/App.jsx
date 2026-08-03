import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import Navbar from './components/NavBar'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ShowWork from './components/ShowWork'
import Descriptions from './components/Descriptions'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Pricing from './Pages/Pricing'
import Generate from './Pages/Generate'
import History from './Pages/History'
import AuthLayout from './Layout/AuthLayout'
import MainLayout from './Layout/MainLayout'
import DashboardLayout from './Layout/DashboardLayout'
import ProtectedRoute from './components/ProtectedRoute'

import { Routes } from 'react-router-dom'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>

         <Routes>


        <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
</Route>

    <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
   
  </Route>

  <Route element={<DashboardLayout />}>

    <Route
    path="/generate"

    element={
    
      <ProtectedRoute>
        <Generate />
      </ProtectedRoute>

    }
    
  />

  </Route>

  {/* <Route path="/generate" element={<Generate />} /> */}


  <Route element={<DashboardLayout />}>
  
    <Route path="/history" element={<History />} />
   
</Route>


   </Routes>
        
           </div>
   
  )
}

export default App

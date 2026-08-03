import React from "react";
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import ShowWork from "../components/ShowWork"
import Descriptions from "../components/Descriptions"
import Testimonials from "../components/Testimonials"

import Footer from "../components/Footer"

import { useAuth } from "../context/AuthContext";


const Home = () => {

   const {user} = useAuth();
   console.log(user);

  return (
    <div className="flex flex-col min-h-screen">
       
        <Header />
        <ShowWork />
        <Descriptions />            
        <Testimonials />
       

        </div>

        )
        }


export default Home;


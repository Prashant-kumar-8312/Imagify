import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const DashboardLayout = () => {
  return (

     <div>

      <NavBar />
  
  
    <div className="flex min-h-screen">

      

    
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
      
    </div>

     <Footer />

    </div>
  );
};

export default DashboardLayout;
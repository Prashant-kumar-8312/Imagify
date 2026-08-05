import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";


 //const [credits, setCredits] = useState(0);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // const token = localStorage.getItem("token");

  //     const user = useAuth();

  //     console.log("user", user);

  //   //   const res = await axios.get(
  //   //     "http://localhost:3000/api/generate/credit",
  //   //     {
  //   //       headers: {
  //   //         Authorization: `Bearer ${token}`,
  //   //       },
  //   //     }
  //   //   );

  //   //   setCredits(res.data.credits);
  //    };

  //   fetchUser();
  // }, []);






const NavBar = () => {

  const { isSignedIn, login , logout  } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

   const navigate = useNavigate();

   const { user } = useAuth();

  //  console.log("User in NavBar:", user);

  //   useEffect(() => {
  //   const fetchUser = async () => {
  //     // const token = localStorage.getItem("token");

  //     const user = useAuth();

  //     console.log("user", user);

  //   //   const res = await axios.get(
  //   //     "http://localhost:3000/api/generate/credit",
  //   //     {
  //   //       headers: {
  //   //         Authorization: `Bearer ${token}`,
  //   //       },
  //   //     }
  //   //   );

  //   //   setCredits(res.data.credits);
  //    };

  //   fetchUser();
  // }, []);



  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //    useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsLoggedIn(!!token);
  // }, []);

  //  const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");

  //   setIsLoggedIn(false);
  //   navigate("/login");
  // };




  

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Generate", path: "/generate" },
    { name: "Pricing", path: "/pricing" },
   
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-xl font-bold text-white">
            I
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Imagify
            </h1>
            <p className="text-xs text-gray-500">
              AI Image Generator
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-indigo-600"
                  : "text-gray-600 transition hover:text-indigo-600"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
       <div className="hidden items-center gap-4 md:flex">
  {isSignedIn ? (
    <>
      <Link
        to="/history"
        className="font-medium text-gray-600 hover:text-indigo-600"
      >
        History
      </Link>

      {/* <Link
        to="/profile"
        className="font-medium text-gray-600 hover:text-indigo-600"
      >
        Profile
      </Link> */}

      <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
  <span>🪙</span>
  <span>{user?.framesRemaining}</span>
</div>

      <button
        onClick={logout}
        className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="font-medium text-gray-600 hover:text-indigo-600"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
      >
        Get Started
      </Link>
    </>
  )}
</div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 border-t bg-white px-6 py-5 md:hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "font-semibold text-indigo-600"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <hr />

          {/* <Link
            to="/login"
            className="block text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="block rounded-lg bg-indigo-600 px-4 py-2 text-center text-white"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link> */}

          <hr />

{isSignedIn ? (
  <>
    <Link
      to="/history"
      className="block text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      History
    </Link>

    {/* <Link
      to="/profile"
      className="block text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      Profile
    </Link> */}

    <button
      onClick={() => {
       logout();
        setIsOpen(false);
      }}
      className="w-full rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link
      to="/login"
      className="block text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      Login
    </Link>

    <Link
      to="/signup"
      className="block rounded-lg bg-indigo-600 px-4 py-2 text-center text-white"
      onClick={() => setIsOpen(false)}
    >
      Get Started
    </Link>
  </>
)}
        </div>
      )}
    </header>
  );
};

export default NavBar;
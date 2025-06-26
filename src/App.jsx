import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
   <div className="w-screen h-screen flex flex-col bg-richblack-900">
    <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  />} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
  ) 
}

export default App;
// Route tag is linking the path to the component that means that if the path matches then the component will be rendered 
import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {  
    const {isLoggedIn, setIsLoggedIn} = props
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto mt-6">
            <Link to="/">
            <img src={logo} alt="logo" width = {160} height = {32} loading ="lazy"/>
            </Link>
            {/* Home/About/Contact */}
            <nav>
                <ul className="flex gap-x-6 list-none text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* Login/Signup */}
            <div className="flex gap-3 mr-3 ml-5 items-center">
                {
                    isLoggedIn?<button onClick={() =>{ setIsLoggedIn(false)
                    toast.success("Logout Successfully")
                    }} className="bg-richblack-800 py-[8px] px-[12px] text-white  border-richblack-700 rounded-[8px]">Logout</button>:<button className="bg-richblack-800 py-[8px] px-[12px] text-white rounded-[8px] border-richblack-700  "><Link to="/login">Login</Link></button>
                }
                {
                    isLoggedIn?<button className="bg-richblack-800 py-[8px] px-[12px] text-white rounded-[8px] border-richblack-700 "><Link to="/dashboard">Dashboard</Link></button>:<button className="bg-richblack-800 py-[8px] px-[12px] text-white rounded-[8px] border-richblack-700"><Link to="/signup">Signup</Link></button>
                }
                
            </div>
        </div>
        
    )
}
export default Navbar;
    
   
  

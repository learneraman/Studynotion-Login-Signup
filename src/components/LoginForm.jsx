import React from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
 

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({email:"",password:""});
    const [showpassword, setShowPassword] = React.useState(false);
    function changeHandler(e){
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Successfully");
        navigate("/dashboard");
        //console.log(formData);
    }
    return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full mt-6 gap-y-4"
        >
            <label className="w-full">
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Email Addres<sub className="text-pink-200" >*</sub></p>
                <input
                    required
                    type="email"
                    id="email" 
                    name="email" 
                    placeholder="Enter mail address"
                    value={formData.email} 
                    onChange={changeHandler}
                    className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
                    >
                </input>
                
            </label>
            
            <label className="w-full relative">
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Password<sub className="text-pink-200" >*</sub></p>
                <input
                    required
                    type={showpassword?"text":"password"}
                    id="password" 
                    name="password" 
                    placeholder="Enter password"
                    value={formData.password} 
                    onChange={changeHandler}
                    className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
                    >
                </input>
                <span onClick={() => setShowPassword(!showpassword)} className="absolute right-3 top-[38px] cursor-pointer">
                    {showpassword?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />:<AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
                </span>
                <Link to="#"><p className="text-xs leading-[1.375rem] text-blue-100 mt-1 ml-auto max-w-max">Forgot Password</p></Link>
            </label>
            <button type="submit" className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] text-richblack-900 font-semibold">Sign In</button>
            
        </form>
    )
}
export default LoginForm;
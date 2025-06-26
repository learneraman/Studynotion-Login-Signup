import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); 
  const [AccountType, setAccountType] = useState("student");
  const [showpassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setShowConfirmPassword] = useState(false);
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");
    navigate("/dashboard");
    //console.log(formData);
  }
  return (
    <div className="flex flex-col my-2 ">
      {/* Student instructor tab */}
      <div className="flex gap-x-1 bg-richblack-800 rounded-full p-1 max-w-max">
        <button className={``}>
          Student
        </button>
        <button className="bg-richblack-800 py-[8px] px-[12px] text-white rounded-[8px] border-richblack-700 "
        onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full mt-4 gap-y-3"
      >
        <div className="flex gap-x-3">
          <label className="w-full">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
              First Name <sub className="text-pink-200">*</sub>
            </p>
            <input
              required
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
              Last Name <sub className="text-pink-200">*</sub>
            </p>
            <input
              required
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
            Email <sub className="text-pink-200">*</sub>
          </p>
          <input
            required
            type="email"
            placeholder="Enter mail address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        {/* create password and confirm password */}
        <div className="flex gap-x-3">
          <label className="w-full relative">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
              Create Password <sub className="text-pink-200">*</sub>
            </p>
            <input
              required
              type={showpassword ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword(!showpassword)}
            >
              {showpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
              Confirm Password <sub>*</sub>
            </p>
            <input
              required
              type={showconfirmpassword ? "text" : "password"}
              placeholder="Enter password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              className="w-full rounded-[8px] bg-richblack-800 p-[12px] text-richblack-5"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword(!showconfirmpassword)}
            >
              {showconfirmpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] text-richblack-900 my-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
// 
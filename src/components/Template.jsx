import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  console.log(formtype);
  return (
    <div className="flex  w-screen max-w-[1160px]  mx-auto  gap-x-3  justify-between">
      <div className="w-11/12 max-w-[450px]  ">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-4 text-[1.25rem]">
          <span className="text-richblack-5">{desc1}</span>
          <br />
          <span className="text-sky-400 italic">{desc2}</span>
        </p>
        {formtype === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex gap-x-3 mt-6">
          <div className="w-full bg-richblack-700"></div>
          <p className="text-richblack-700 relative top-[-12px] font-bold h-[1px]">OR</p>
          <div className="w-full bg-richblack-700"></div>
        </div>
        <button className="flex justify-center items-center bg-richblack-800 py-[8px] px-[12px] text-white rounded-[8px] border-richblack-700 w-full gap-x-2 mt-6 font-semibold">
          <FcGoogle></FcGoogle>
          <p>SignIn with Google</p>
        </button>
      </div>
      <div className="relative mt-16 w-11/12 max-w-[450px] ">
        <img
          src={frameImage}
          alt="Pattern"
          width={504}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};
export default Template;

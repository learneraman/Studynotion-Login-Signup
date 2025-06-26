import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";


function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion."
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}  // this is a prop coming from the 
    />  
  );
}
export default Signup;

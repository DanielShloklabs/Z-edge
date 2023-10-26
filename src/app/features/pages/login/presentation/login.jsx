/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomInput from "../../../reusableComponents/customInput";
import "../../../../common/styles/loginStyle.css";
import landingLogo from "../../../../assets/landingLogo2.webp";
import CustomButton from "../../../reusableComponents/customButton";
import { useAuth } from "../../../../common/utils/authContext";
import CustomPhoneInput from "../../../reusableComponents/customPhoneInput";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { setIsLoggedIn } = useAuth();
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const handleSignIn = () => {
    setIsLoggedIn(true);
  };
  const handleSignUp = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="login">
      <div className="loginBackLeft"></div>
      <div className="loginForm">
        <div className="loginImage">
          <div className="header-logo">
            <div className="logo">
              <div className="logoStart logoLogin">Z</div>
              <div className="logoEnd">EDGE</div>
            </div>
          </div>
          <img src={landingLogo} alt="" />
        </div>
        <div className="loginContent">
          <div className="loginSignUpSwitcher">
            <div
              className={`signInBtn ${!isSignUp ? "selected" : ""}`}
              onClick={() => setIsSignUp(false)}
            >
              Sign in
            </div>
            <div
              className={`signUpBtn ${isSignUp ? "selected" : ""}`}
              onClick={() => setIsSignUp(true)}
            >
              Sign up
            </div>
          </div>
          <div className="loginFormContent">
            {isSignUp && (
              <div>
                <CustomInput
                  id="fullName"
                  label="FULL NAME"
                  type="text"
                  placeholder="Enter your full name"
                />
                <CustomPhoneInput
                  id="phoneNumber"
                  label="PHONE NUMBER"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            )}
            <CustomInput
              id="email"
              label="E-MAIL"
              type="email"
              placeholder="Enter your e-mail address"
            />
            <CustomInput
              id="password"
              label="PASSWORD"
              type="password"
              placeholder="Enter your password"
            />

            <CustomButton
              handleClick={() => (isSignUp ? handleSignUp() : handleSignIn())}
              buttonName={isSignUp ? "Sign up" : "Sign in"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import "../../../styles/customer/signup_login.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import userSession from "../../../utils/userSession";

function Signup() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
 // const [userData, setUserData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setErrorMessage("Password is not strong enough");
      return;
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/Customer/signup", {
        fullname,
        address,
        phonenumber,
        email,
        password,
      });
      const userData = {
        email: email
      }
     // setUserData(response.data);
      //localStorage.setItem("userData", JSON.stringify(userData));

      if (response.status === 200) {
        console.log("Signup successful", response.data);
        const { data } = await axios.get(`/api/Customer/getId?email=${email}`);
      const customerId = data.customerId;
      console.log("Customer ID:", customerId);
        userSession.login(email, "customer", customerId);
        router.push("/Customer/product");
      }
    } catch (err) {
      if (err.response.status === 400) {
        setIsPasswordStrong(false);
        setErrorMessage("Email Already Exist");
      } else setErrorMessage("An error occurred during signup.");
    }
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value);
    setErrorMessage("");
    if (setter === setPassword) {
      if (value.length < 8) {
        setIsPasswordStrong(false);
        setErrorMessage("Password is not strong enough");
      } else {
        setIsPasswordStrong(true);
        setErrorMessage("Strong Password");
      }
    }
  };

  return (
    <div className="Container">
      <div className="RightSide">
        <div className="ImgBlock">
          <img src="../../../RailTruxLogo.jpeg" alt="Logo" />
          <h1>Welcome back!</h1>
          <p>Already have an Account?</p>
          <button onClick={() => router.push("/Customer/customerLogin")}>
            Log in
          </button>
        </div>
      </div>
      <div className="LeftSide">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={handleInputChange(setFullname)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleInputChange(setAddress)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={handleInputChange(setPhonenumber)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            required
          />
          {/* Display the error message */}
          {errorMessage && (
            <div
              className="error-message"
              style={{ color: isPasswordStrong ? "green" : "red" }}
            >
              {errorMessage}
            </div>
          )}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
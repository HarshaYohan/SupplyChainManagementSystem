"use client";
import "../../styles/signup_login.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from 'axios';

function Signup() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password is not strong enough");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/signup", {
        fullname,
        email,
        phonenumber,
        password,
      });


      const userData = {
        email: email,
        password: password,
      }
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(userData)

      if (response.status === 200) {
        console.log("Signup successful", response.data);
        router.push("/product");
      }
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="Container">
      <div className="RightSide">
        <div className="ImgBlock">
          <img src="../../RailTruxLogo.jpeg" alt="Logo" />
          <h1>Welcome back!</h1>
          <p>Already have an Account?</p>
          <button onClick={() => router.push("/login")}>Log in</button>
        </div>
      </div>
      <div className="LeftSide">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

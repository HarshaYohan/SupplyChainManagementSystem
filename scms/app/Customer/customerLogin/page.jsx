"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import UserSession from "../../../utils/userSession";
import "../../../styles/customer/signup_login.css";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    setInterval(() => setIsClicked(false), 200);

    try {
      const response = await axios.post("/api/Customer/login", { email, password });
      
      const { data } = await axios.get(`/api/Customer/getId?email=${email}`);
      const customerId = data.customerId;
      console.log("Customer ID:", customerId);
      
      // Login and set role as "customer"
      UserSession.login(email, "customer", customerId);  
      console.log("Login successful", response.data);
      router.push("/Customer/product");
    } catch (err) {
      console.error("Login failed", err);
      setErrorMessage("Login failed. Please check your email and password.");
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setErrorMessage("");
  };

  return (
    <div className="Container">
      <div className="RightSide">
        <div className="ImgBlock">
          <img src="../../RailTruxLogo.jpeg" alt="Logo" />
          <h1>Welcome back!</h1>
          <p>Haven't created an Account?</p>
          <button onClick={() => router.push("/Customer/signup")}>Sign up</button>
        </div>
      </div>
      <div className="LeftSide">
        <h1>Log in to your Account</h1>
        <form onSubmit={handleSubmit}>
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
          {errorMessage && (
            <p className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: isClicked ? "#0a74da" : "#110E56",
              transition: "background-color 1s",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

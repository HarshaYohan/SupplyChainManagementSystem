"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
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
      
      const response = await axios.post("/api/Employee/employeeLogin", {
        email,
        password,
      });

      const userData = {
        email: email,
        role: response.data.role,
        id: response.data.ID,
      };
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(userData));

      console.log("Login successful", response.data);
      if (userData.role === "Store Manager") router.push("/Employee/storeManager");
      else if (
        userData.role === "Driver" ||
        userData.role === "Driver Assistant"
      )
        router.push("/Employee/Driver/DriverHomePage");
      else if (userData.role === "Company Manager")
        router.push("/Employee/CompanyManager/home");
    } catch (err) {
      console.error("Login failed", err);
      setErrorMessage("Login failed. Please check your email and password."); // Step 2: Set error message
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
          <img src="../../../RailTruxLogo.jpeg" alt="Logo" />
          <h1>Welcome back!</h1>
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
          {/* Display error message */}
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

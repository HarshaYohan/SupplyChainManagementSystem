"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import "../../styles/signup_login.css";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });


      const userData = {
        email: email,
        password: password,
      }
      localStorage.setItem("userData", JSON.stringify(userData));


      
      console.log("Login successful", response.data);
      router.push("/product");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="Container">
      <div className="RightSide">
        <div className="ImgBlock">
          <img src="/RailTruxLogo.jpeg" alt="Logo" />
          <h1>Welcome back!</h1>
          <p>Haven't created an Account?</p>
          <button onClick={() => router.push("/signup")}>Sign up</button>
        </div>
      </div>
      <div className="LeftSide">
        <h1>Log in to your Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

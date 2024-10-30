"use client";
import "../../../styles/customer/navbar.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserSession from "../../../utils/userSession"; // Assuming session management here

function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    setIsLoggedIn(UserSession.isLoggedIn());
  }, []);

  const handleClickHome = () => router.push("/Customer/product");

  const handleClickCart = () => {
    if (isLoggedIn) {
      router.push("/Customer/cart");
    } else {
      router.push("/Customer/customerLogin");
    }
  };

  const handleClickOrders = () => {
    if (isLoggedIn) {
      router.push("/Customer/orders");
    } else {
      router.push("/Customer/customerLogin");
    }
  };

  const handleClickProfile = () => router.push("/Customer/profile");
  const handleClickLogin = () => router.push("/Customer/customerLogin");
  const handleClickLogo = () => router.push("/");

  return (
    <div className="Header">
      {/* Branding Section */}
      <div className="leftSection">
        <img
          src="../../../RailTrux.jpg"
          alt="RailTrux Logo"
          className="logo"
          onClick={handleClickLogo}
        />
      </div>

      {/* Icons Section */}
      <div className="iconGroup">
        <img
          src="../../../home.png"
          alt="Home"
          className="icon"
          onClick={handleClickHome}
        />
        <img
          src="../../../carts.png"
          alt="Cart"
          className="icon"
          onClick={handleClickCart}
        />
        <img
          src="../../../orders.png" // Replace with the actual path to your orders icon
          alt="Orders"
          className="icon"
          onClick={handleClickOrders}
        />
        {isLoggedIn ? (
          <img
            src="../../../OIP.jpeg"
            alt="Profile"
            className="profileImage"
            onClick={handleClickProfile}
          />
        ) : (
          <button onClick={handleClickLogin} className="loginButton">
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

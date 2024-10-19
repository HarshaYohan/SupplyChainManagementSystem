"use client";
import "../../../styles/customer/profile.css";
import Navbar from "../components/navbar.jsx";
import "../../global.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const [customerID, setCustomerID] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userData) return;

      try {
        const response = await axios.post("/api/Customer/fetch_User_Data", {
          email: userData.email,
        });
        setCustomerID(response.data.CustomerID || "");
        setName(response.data.CustomerName || "");
        setAddress(response.data.Address || "");
        setPhone(response.data.PhoneNumber || "");
        setEmail(response.data.Email || "");
      } catch (error) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userData]);

  if (error) {
    return (
      <div className="loading-overlay">
        <div className="loading-message">{error}</div>
      </div>
    );
  } else if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-message">Loading your profile...</div>
      </div>
    );
  }

  const handleSave = async () => {
    try {
      await axios.post("/api/Customer/updateProfile", {
        customerID: customerID,
        name: name,
        address: address,
        phone: phone,
        email: email,
      });
    } catch (err) {
      if (err) {
        console.log(error);
      }
    }
  };

  return (
    <div className="Container">
      <Navbar />
      <div className="BodySection">
        <div className="profileContainer">
          <div className="profilepicturesection">
            <img src="../../../OIP.jpeg" alt="Profile" />
          </div>
          <div className="contentSection">
            <h1>{name || "Name not available"}</h1>

            <div className="field">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-box"
              />
            </div>
            <div className="field">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="field">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="field">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-box"
              />
            </div>

            <button onClick={handleSave} className="save-button">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

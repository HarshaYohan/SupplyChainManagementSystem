"use client";
import "../../styles/profile.css";
import Navbar from "../components/navbar.jsx";
import "../global.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Local state for editable fields
  const [customerID, setCustomerID] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }
  }, []);

  useEffect(() => {
    // Fetch user data when userData is available
    const fetchUserData = async () => {
      if (!userData) return; // Ensure userData is available before fetching

      try {
        const response = await axios.post("/api/fetch_User_Data", {
          email: userData.email,
          //password: userData.password,
        });
        setCustomerID(response.data.CustomerID || "");
        setName(response.data.CustomerName || "");
        setAddress(response.data.Address || "");
        setPhone(response.data.PhoneNumber || "");
        setEmail(response.data.Email || "");
      } catch (error) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false); // Stop loading when request is complete
      }
    };

    fetchUserData();
  }, [userData]);

  if (error) {
    return (
      <div className="loading-overlay">
        <div className="loading-message">{error}</div>
      </div>
    ); // Show loading overlay while fetching user data
  } else if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-message">Loading your profile...</div>
      </div>
    );
  }

  const handleSave = async () => {
    try {
      const res = await axios.post("/api/updateProfile", {
        customerID: customerID,
        name: name,
        address: address,
        phone: phone,
        email: email,
      });
      console.log(res);
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
            <img src="../../OIP.jpeg" alt="Profile" />
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

            <div className="field">
              <label>Password:</label>
              <input
                type="password"
                value={"*********"} // Show masked password or leave it empty
                readOnly // Making it read-only since you usually don't edit passwords like this
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

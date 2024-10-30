"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Drivernavbar from "../../components/Drivernavbar";
import "../../../../styles/employee/DriverProfile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  // Fetch driver profile from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const { email } = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await axios.post("/api/Employee/fetchDriverProfile", { email });
        const data = response.data;
        setUser(data);
        setFormData({
          name: data.Name || "",
          address: data.Address || "",
          phoneNumber: data.PhoneNumber || "",
          email: data.Email || ""
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-message">Loading profile...</div>
      </div>
    );
  }

  return (
    <div>
      <Drivernavbar />
      <div className="Container">
        <div className="BodySection">
          <div className="profileContainer">
            <div className="profilepicturesection">
              <img src="../../../OIP.jpeg" alt="Profile" />
            </div>
            <div className="contentSection">
              <h1>{user?.Name || "Name not available"}</h1>
              
              <div className="field">
                <label>Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="input-box"
                />
              </div>

              <div className="field">
                <label>Address:</label>
                <input
                  type="text"
                  value={formData.address}
                  readOnly
                  className="input-box"
                />
              </div>

              <div className="field">
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  readOnly
                  className="input-box"
                />
              </div>

              <div className="field">
                <label>Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="input-box"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
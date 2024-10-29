"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Drivernavbar from "../../components/Drivernavbar";
import "../../../../styles/employee/DriverProfile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch driver profile from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const { email } = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await axios.post("/api/Employee/fetchDriverProfile", { email });
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
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
            <h2 className="profile-name">{user.Name || "Name not available"}</h2>
            <p className="profile-email">{user.Email}</p>
            <p className="profile-address"><strong>Address:</strong> {user.Address}</p>
            <p className="profile-phone"><strong>Phone Number:</strong> {user.PhoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
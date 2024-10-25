"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/employee/DriverProfile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch driver profile from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const {email} = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await axios.post("/api/Employee/fetchDriverProfile1", { email});
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
    <div className="container2">
      <div className="profile-container">
        <h2 className="profile-name">{user.Name}</h2>
        <p className="profile-email">{user.Email}</p>
        <p className="profile-address"><strong>Address:</strong> {user.Address}</p>
        <p className="profile-phone"><strong>Phone Number:</strong> {user.PhoneNumber}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;


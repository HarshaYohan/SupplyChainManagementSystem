// "use client";
// import "../../styles/profile.css";
// import Navbar from "../components/navbar.jsx";
// import "../global.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Profile() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userData, setUserData] = useState(null);
//   const [userDetails, setUserDetails] = useState(null); // To store fetched user details

//   useEffect(() => {
//     // Get user data from localStorage
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       const parsedData = JSON.parse(storedUserData);
//       setUserData(parsedData);
//       console.log("User data from localStorage:", parsedData); // Debugging log
//     }
//   }, []);

//   useEffect(() => {
//     // Fetch user data when userData is available
//     const fetchUserData = async () => {
//       if (!userData) return; // Ensure userData is available before fetching

//       try {
//         const response = await axios.post("/api/profile", {
//           email: userData.email,
//           password: userData.password,
//         });
//         setUserDetails(response.data);
//         console.log("Fetched user details:", response.data); // Debugging log
//       } catch (error) {
//         setError("Failed to fetch user details");
//         console.error("API request error:", error); // Debugging log
//       } finally {
//         setLoading(false); // Stop loading when request is complete
//       }
//     };

//     fetchUserData();
//   }, [userData]);

//   if (error) return <p>{error}</p>;
//   if (!userDetails) {
//     return <p>No user details available.</p>;
//   }
//   return (
//     <div className="Container">
//       <Navbar />
//       <div className="BodySection">
//         <div className="profileContainer">
//           <div className="profilepicturesection">
//             <img src="../../OIP.jpeg" alt="Profile" />
//           </div>
//           <div className="contentSection">
//             <h1>{userDetails.Name || "Name not available"}</h1>

//             <div className="field">
//               <label>Name:</label>
//               <div className="detail-box">{userDetails.Name || "N/A"}</div>
//             </div>

//             <div className="field">
//               <label>Email:</label>
//               <div className="detail-box">{userDetails.Email || "N/A"}</div>
//             </div>

//             <div className="field">
//               <label>Phone Number:</label>
//               <div className="detail-box">{userDetails.PhoneNumber || "N/A"}</div>
//             </div>

//             <div className="field">
//               <label>Address:</label>
//               <div className="detail-box">{userDetails.Address || "N/A"}</div>
//             </div>

//             <div className="field">
//               <label>Password:</label>
//               <div className="detail-box">{"*********"}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
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
  const [userDetails, setUserDetails] = useState(null); // To store fetched user details

  // Local state for editable fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      console.log("User data from localStorage:", parsedData); // Debugging log
    }
  }, []);

  useEffect(() => {
    // Fetch user data when userData is available
    const fetchUserData = async () => {
      if (!userData) return; // Ensure userData is available before fetching

      try {
        const response = await axios.post("/api/profile", {
          email: userData.email,
          password: userData.password,
        });
        setUserDetails(response.data);
        setName(response.data.Name || "");
        setEmail(response.data.Email || "");
        setPhone(response.data.PhoneNumber || "");
        setAddress(response.data.Address || "");
      } catch (error) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false); // Stop loading when request is complete
      }
    };

    fetchUserData();
  }, [userData]);

  if (error) return <p>{error}</p>;
  if (!userDetails) {
    return <p>No user details available.</p>;
  }

  const handleSave = async () => {
    try {
      const res = await axios.post('/api/updateProfile',{
        name: name,
        email: email,
        phone: phone,
        address: address
      })
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
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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



// import "../../../styles/employee/Drivernavbar.css";
// export default function Drivernavbar() {
//     return (
//       <nav className="Drivernavbar">
//         {/* Logo Section */}
        
//         {/* Navigation Links */}
//         <div className="nav-links">
            
//           <a href="/Employee/Driver/DriverProfile">Profile</a>
//           <a href="/Employee/Driver/DriverHelp">Help</a>
//           <a href="/Employee/Driver/Help">Language</a>
//         </div>

//         <div className="logo">
//           <span className="logo-text">RAILTRUX</span>
//         </div>
  
  
//         {/* Login Section */}
//         <div className="login-section">
//           <a href="#">LogOut</a>
//           <div className="user-icon"></div>
//         </div>
//       </nav>
//     );
//   }
  
"use client";
import "../../../styles/employee/NavbarEmployee.css";

import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleProfile = () => {
    router.push("/Employee/Driver/DriverProfile");
  };
  const handleHelp = () => {
    router.push("/Employee/Driver/DriverHelp");
  };
  const handleHome = () => {
    router.push("/Employee/Driver/DriverHomePage");
  };
  const handleClickLogo = () => {
    router.push("/");
  };
  

  return (
    <div className="Header">
      <div className="leftSection">
          <img
            src="../../logo.png"
            alt="RailTrux Logo"
            onClick={handleClickLogo}
          />
      </div>
      <div className="iconGroup">
      <img
          src="../../../Home.png"
          alt="Home"
          className="icon"
          onClick={handleHome}
        />
      
      <img
          src="../../../Help.png"
          alt="Help"
          className="icon"
          onClick={handleHelp}
        />
        <img
          src="../../../OIP.jpeg"
          alt="Profile"
          className="profileImage"
          onClick={handleProfile}
        />
       
        
      </div>
    </div>
      
  );
}

export default Navbar;
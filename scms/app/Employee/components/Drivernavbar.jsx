import "../../../styles/employee/Drivernavbar.css";
export default function Drivernavbar() {
    return (
      <nav className="Drivernavbar">
        {/* Logo Section */}
        
        {/* Navigation Links */}
        <div className="nav-links">
            
          <a href="/Employee/Driver/DriverProfile">Profile</a>
          <a href="/Employee/Driver/DriverHelp">Help</a>
          <a href="/Employee/Driver/Help">Language</a>
        </div>

        <div className="logo">
          <span className="logo-text">RAILTRUX</span>
        </div>
  
  
        {/* Login Section */}
        <div className="login-section">
          <a href="#">LogOut</a>
          <div className="user-icon"></div>
        </div>
      </nav>
    );
  }
  
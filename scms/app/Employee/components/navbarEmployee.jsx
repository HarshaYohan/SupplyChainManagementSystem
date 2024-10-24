"use client";
import "../../../styles/employee/NavbarEmployee.css";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/Employee/CompanyManager/home");
  };
  const handleClickLogo = () => {
    router.push("/");
  };
  const handleClickLogin = () => {
    router.push("/Employee/EmployeeLogin");
  };

  return (
    <div className="Header">
      <div className="leftSection">
        <div className="logoSection">
          <img
            src="../../logo.png"
            alt="RailTrux Logo"
            onClick={handleClickLogo}
          />
        </div>
        <div className="buttonGroup">
          <button onClick={handleClickHome} className="Button">
            Home
          </button>
        </div>
      </div>
      <div className="rightSection">
        <button onClick={handleClickLogin} className="Button">
          Login
        </button>
        <div className="profilePhoto">
          <img src="../../OIP.jpeg" alt="Profile" className="profileImage" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

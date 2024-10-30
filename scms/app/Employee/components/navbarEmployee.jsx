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
  const handleClickReport = () => {
    router.push("/Employee/CompanyManager/Reports");
  };
  const handleClickTrain = () => {
    router.push("/Employee/CompanyManager/TransportProduct");
  };


  return (
    <div className="Header">
      <div className="leftSection">
          <img
            src="../../RailTruxLogo.png"
            alt="RailTrux Logo"
            onClick={handleClickLogo}
          />
      </div>
      <div className="iconGroup">
      <img
          src="../../../trainIcon.png"
          alt="Train"
          className="icon"
          onClick={handleClickTrain}
        />
      <img
          src="../../../reportIcon.png"
          alt="Report"
          className="icon"
          onClick={handleClickReport}
        />
        <img
          src="../../../home.png"
          alt="Home"
          className="icon"
          onClick={handleClickHome}
        />
        <img
            src="../../../OIP.jpeg"
            alt="Profile"
            className="profileImage"
        />        
      </div>
    </div>
      
  );
}

export default Navbar;

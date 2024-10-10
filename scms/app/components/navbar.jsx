"use client";
import "../../styles/navbar.css";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleClickProfile = () => {
    router.push("/profile");
  };
  const handleClickCart = () => {
    router.push("/cart");
  };
  const handleClickHome = () => {
    router.push("/");
  };
  const handleClickLogin = () => {
    router.push("/login");
  };

  return (
    <div className="Header">
      <div className="leftSection">
        <div className="logoSection">
          <img
            src="../../logo.png"
            alt="RailTrux Logo"
            onClick={handleClickHome}
          />
        </div>
        <div className="buttonGroup">
          <button onClick={handleClickHome} className="Button">
            Home
          </button>
          <button onClick={handleClickProfile} className="Button">
            Profile
          </button>
          <button onClick={handleClickCart} className="Button">
            Cart
          </button>
        </div>
      </div>
      <div className="rightSection">
        <button onClick={handleClickLogin} className="Button">
          Login
        </button>
        <div className="profilePhoto">
          <img
            src="../../OIP.jpeg"
            alt="Profile"
            className="profileImage"
            onClick={handleClickProfile}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

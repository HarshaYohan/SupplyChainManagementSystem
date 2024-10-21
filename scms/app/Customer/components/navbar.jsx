"use client";
import "../../../styles/customer/navbar.css";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const handleClickProfile = () => {
    router.push("/Customer/profile");
  };
  const handleClickCart = () => {
    router.push("/Customer/cart");
  };
  const handleClickHome = () => {
    router.push("/Customer/product");
  };
  const handleClick = () => {
    router.push("/");
  };
  const handleClickLogin = () => {
    router.push("/Customer/customerLogin");
  };

  return (
    <div className="Header">
      <div className="leftSection">
        <div className="logoSection">
          <img
            src="../../../logo.png"
            alt="RailTrux Logo"
            onClick={handleClick}
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
            src="../../../OIP.jpeg"
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

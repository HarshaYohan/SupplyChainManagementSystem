"use client";
import "../../styles/navbar.css";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter(); 

  const handleClickProfile = () => {
    router.push('/profile'); 
  };
  const handleClickCart = () => {
    router.push('/cart'); 
  };
  const handleClickHome = () => {
    router.push('/product'); 
  };

  return (
    <div className="Header">
      <div className="logoSection">
        <img src="../../RailTruxLogo.jpeg" alt="RailTrux Logo" /> {/* Added alt text for accessibility */}
      </div>
      <div className="ProfileSection">
      <button onClick={handleClickHome} className="Button">Home</button>
        <button onClick={handleClickProfile} className="Button">Profile</button>
        <button onClick={handleClickCart} className="Button">Cart</button>
      </div>
    </div>
  );
}

export default Navbar;

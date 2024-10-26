"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/home.css";

function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);


  // Ensure the component is mounted before rendering fully
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigateShop = () => {
    localStorage.clear();
    router.push("/Customer/product");
  };

  const handleNavigateLogistics = () => {
    router.push("/Employee/EmployeeLogin");
  };

  // Render a loading state if not mounted yet
  if (!isMounted) return <div>Loading...</div>;

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <div className="logoContainer">
          <img src="./RailTruxLogo.jpeg" alt="RailTrux Logo" className="logo" />
        </div>
        <h1 className="title">Welcome to RailTrux</h1>
        <p className="subtitle">Your seamless link between products and logistics.</p>
      </div>

      {/* Info Section */}
      <div className="infoSection">
        <div className="infoBox shopBox">
          <h2>Explore Our Store</h2>
          <p>
            Browse an extensive range of products with competitive pricing, fast delivery, and secure checkout.
          </p>
          <button onClick={handleNavigateShop} className="button">
            Go to Shop
          </button>
        </div>
        <div className="infoBox logisticsBox">
          <h2>About RailTrux Logistics</h2>
          <p>
            Manage orders and shipments efficiently with our hybrid rail and truck logistics solution.
          </p>
          <button onClick={handleNavigateLogistics} className="button">
            Logistics Portal
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2024 A Company. All Rights Reserved.</p>
        <p>Rail and Truck Logistics Powered by <strong>RailTrux</strong>.</p>
      </div>
    </div>
  );
}

export default Home;

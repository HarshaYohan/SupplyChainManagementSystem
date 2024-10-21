"use client";
import { useRouter } from "next/navigation";
import '../styles/home.css';

function Home() {
  const router = useRouter();

  const handleClickCustomer = () => {
    router.push("/Customer/product");
  };
  const handleClickEmployee = () => {
    router.push("/Employee/EmployeeLogin");
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <img src="./RailTruxLogo.jpeg" alt="logo" className="logo" />
      </div>
      <div className="titleContainer">
        <h1 className="title">RailTrux</h1>
        <h3 className="subtitle">Your Supply Chain Partner</h3>
      </div>
      <div className="buttonContainer">
        <button onClick={handleClickCustomer} className="button">
          Login As Customer
        </button>
        <button onClick={handleClickEmployee} className="button">
          Login As Employee
        </button>
      </div>
    </div>
  );
}

export default Home;

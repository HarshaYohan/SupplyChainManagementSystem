import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/storeDetails.css";

function StoresList() {
  // State to hold stores data
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null); // State to hold the selected store for displaying details

  // Fetch stores data from backend
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("/api/stores");
        setStores(response.data); // Assuming the backend returns an array of store objects
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []); // Empty dependency array to run only on component mount

  // Function to toggle the store details
  const toggleStoreDetails = (store) => {
    if (selectedStore === store) {
      setSelectedStore(null);
    } else {
      setSelectedStore(store);
    }
  };

  return (
    <div className="form-container">
      <h2>Stores</h2>

      {/* Displaying Store Details Form */}
      {selectedStore && (
        <form style={{ marginBottom: "20px" }}>
          <div>
            <label>
              Store Manager:
              <input type="text" value={selectedStore.Name} readOnly />
            </label>
          </div>
          <div>
            <label>
              Store Location:
              <input type="text" value={selectedStore.StoreLocation} readOnly />
            </label>
          </div>
          <div>
            <label>
              Contact Number:
              <input
                type="text"
                value={selectedStore.ContractNumber}
                readOnly
              />
            </label>
          </div>
          <div>
            <label>
              Railway Station Contact:
              <input
                type="text"
                value={selectedStore.RailwayStationContract}
                readOnly
              />
            </label>
          </div>
          <div>
            <label>
              City Name:
              <input type="text" value={selectedStore.CityName} readOnly />
            </label>
          </div>
        </form>
      )}

      {stores.map((store) => (
        <div key={store.StoreID} className="store-item">
          <div
            className="store-name"
            onClick={() => toggleStoreDetails(store)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              margin: "5px 0",
            }}
          >
            {store.CityName} {/* Displaying the store location for selection */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoresList;

import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/storeDetails.css";

function StoresList() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null); 

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("/api/stores");
        setStores(response.data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  const toggleStoreDetails = (store) => {
    if (selectedStore === store) {
      setSelectedStore(null);
    } else {
      setSelectedStore(store);
    }
  };

  return (
    <div className="form-container">
      {selectedStore === null ? (
        <h2>Branches</h2>
      ) : (
        <h2>{selectedStore.CityName + " " + "Branch"}</h2>
      )}

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
                value={selectedStore.ContactNumber}
                readOnly
              />
            </label>
          </div>
          <div>
            <label>
              Railway Station Contact:
              <input
                type="text"
                value={selectedStore.RailwayStationContact}
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

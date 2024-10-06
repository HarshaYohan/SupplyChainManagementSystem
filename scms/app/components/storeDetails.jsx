import { useState } from "react";
import "../../styles/storeDetails.css";

function StoresList() {
  // Array of stores with names and details
  const stores = [
    {
      id: 1,
      name: "Store 1",
      details:
        "This store is located in the city center and has a wide range of products.",
    },
    {
      id: 2,
      name: "Store 2",
      details: "This store specializes in electronics and home appliances.",
    },
    {
      id: 3,
      name: "Store 3",
      details: "This store is known for its organic and eco-friendly products.",
    },
    // Add more stores as needed
  ];

  // State to track which store details are open
  const [openStore, setOpenStore] = useState(null);

  // Function to toggle the store details
  const toggleStoreDetails = (storeId) => {
    if (openStore === storeId) {
      // If the store is already open, close it
      setOpenStore(null);
    } else {
      // Open the selected store
      setOpenStore(storeId);
    }
  };

  return (
    <form className="form-container">
      <h2>Stores</h2>

      {stores.map((store) => (
        <div key={store.id} className="store-item">
          {/* Store name clickable div */}
          <div
            className="store-name"
            onClick={() => toggleStoreDetails(store.id)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              margin: "5px 0",
            }}
          >
            {store.name}
          </div>

          {/* Store details dropdown (visible only when clicked) */}
          {openStore === store.id && (
            <div
              className="store-details"
              style={{
                padding: "10px",
                backgroundColor: "#e0e0e0",
                marginBottom: "10px",
              }}
            >
              {store.details}
            </div>
          )}
        </div>
      ))}
    </form>
  );
}

export default StoresList;

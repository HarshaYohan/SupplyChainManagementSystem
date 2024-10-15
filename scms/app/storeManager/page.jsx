"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/storeManager.css";

const StoreManager = () => {
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({
    name: "",
    location: "",
    manager: "",
  });

  const [isAddingStore, setIsAddingStore] = useState(false);

  useEffect(() => {
    // Fetch stores data from the backend when component mounts
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

  const handleAddStore = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/stores", newStore);
      setStores([...stores, response.data]); // Add new store to the list
      setNewStore({ name: "", location: "", manager: "" }); // Reset form
      setIsAddingStore(false); // Close form after submission
    } catch (error) {
      console.error("Error adding store:", error);
    }
  };

  const handleDeleteStore = async (storeId) => {
    try {
      await axios.delete(`/api/stores/${storeId}`);
      setStores(stores.filter((store) => store.id !== storeId)); // Remove the store from the list
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  return (
    <div className="store-manager-wrapper">
      {/* Left-side Navbar */}
      <div className="sidebar">
        <h3>Store Manager</h3>
        <ul>
          <li onClick={() => setIsAddingStore(false)}>My Store</li>
          <li>Drivers</li>
          <li>Help</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="store-manager-container">
        <h2>My Store</h2>
        <button onClick={() => setIsAddingStore(true)}>Add Store</button>

        {isAddingStore && (
          <form onSubmit={handleAddStore} className="form-container">
            <h3>Add New Store</h3>
            <input
              type="text"
              placeholder="Store Name"
              required
              value={newStore.name}
              onChange={(e) =>
                setNewStore({ ...newStore, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Location"
              required
              value={newStore.location}
              onChange={(e) =>
                setNewStore({ ...newStore, location: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Manager Name"
              required
              value={newStore.manager}
              onChange={(e) =>
                setNewStore({ ...newStore, manager: e.target.value })
              }
            />
            <button type="submit">Add Store</button>
            <button
              type="button"
              onClick={() => setIsAddingStore(false)}
              className="cancel-button"
            >
              Cancel
            </button>
          </form>
        )}

        <div className="store-list">
          {stores.length > 0 ? (
            stores.map((store) => (
              <div key={store.id} className="store-card">
                <h3>{store.name}</h3>
                <p>Location: {store.location}</p>
                <p>Manager: {store.manager}</p>
                <button
                  onClick={() => handleDeleteStore(store.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No stores available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreManager;

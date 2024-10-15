"use client";
import React, { useState } from "react";
import axios from "axios";
import "../../styles/createStore.css";

const CreateStore = () => {
  const [store, setStore] = useState({
    storeID: "",
    cityID: "",
    storeLocation: "",
    contactNumber: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the API endpoint to create a new store
      await axios.post("/api/stores", store);
      setIsSuccess(true); // Set success state if the store is added successfully
      setStore({
        storeID: "",
        cityID: "",
        storeLocation: "",
        contactNumber: "",
      }); // Reset the form
    } catch (error) {
      setErrorMessage("Error adding store. Please try again.");
      console.error("Error creating store:", error);
    }
  };

  return (
    <div className="create-store-container">
      <h2>Create New Store</h2>

      {isSuccess && <p className="success-message">Store added successfully!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="storeID">Store ID</label>
        <input
          type="text"
          id="storeID"
          required
          value={store.storeID}
          onChange={(e) => setStore({ ...store, storeID: e.target.value })}
        />

        <label htmlFor="cityID">City ID</label>
        <input
          type="text"
          id="cityID"
          required
          value={store.cityID}
          onChange={(e) => setStore({ ...store, cityID: e.target.value })}
        />

        <label htmlFor="storeLocation">Store Location</label>
        <input
          type="text"
          id="storeLocation"
          required
          value={store.storeLocation}
          onChange={(e) => setStore({ ...store, storeLocation: e.target.value })}
        />

        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="text"
          id="contactNumber"
          required
          value={store.contactNumber}
          onChange={(e) =>
            setStore({ ...store, contactNumber: e.target.value })
          }
        />

        <button type="submit">Create Store</button>
      </form>
    </div>
  );
};

export default CreateStore;

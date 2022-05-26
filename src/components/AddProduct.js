import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const addProduct = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
  };

  return (
    <div className="product">
      <div>
        <h1 className="add-product">Add Product</h1>
        <input
          className="input-box"
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-box"
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Enter product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button className="app-button" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

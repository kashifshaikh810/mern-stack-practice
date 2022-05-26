import React, { useEffect, useState } from "react";

const Product = () => {
  const [productsData, setProductsData] = useState([]);

  const deleteProduct = async (item) => {
    let id = item._id;
    await fetch(`http://localhost:5000/delete-product/${id}`, {
      method: "delete",
    })
      .then((result) => {
        result
          .json()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProducts = async () => {
    let id = JSON.parse(localStorage.getItem("user"))._id;
    await fetch(`http://localhost:5000/get-product/${id}`)
      .then((res) => {
        res
          .json()
          .then((response) => {
            setProductsData(response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [deleteProduct]);

  return (
    <div>
      <h1>Your Products</h1>
      {productsData.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <p>{item.category}</p>
            <p
              style={{ cursor: "pointer", marginLeft: 30 }}
              onClick={() => deleteProduct(item)}
            >
              Delete
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

import React, { useState, useEffect } from "react";
import { getAllCategories } from "../Home/service";
import "./addProduct.css";
import { createProducts } from "./service";
import { useNavigate } from "react-router-dom";
import { email } from "../../constants";

function AddProduct() {
  let navigate = useNavigate();

  const [categories, setcategories] = useState([]);
  const [productDetails, setproductDetails] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    avatar: "",
    developerEmail: process.env.REACT_APP_EMAIL || email,
  });
  useEffect(() => {
    //categories api call
    getAllCategories()
      .then((e) => {
        setcategories(e);
      })
      .catch((err) => {
        console.log(err, "caterr");
      });
  }, []);

  const OnSubmit = async () => {
    await createProducts(productDetails)
      .then((data) => {
        if (data?.data?.message === "Success") {
          navigate("/");
        } else {
          alert(data?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err, "jhg");
      });
  };
  return (
    <div className={"addProd-container"}>
      <div className={"addProd-title"}>Create Product</div>
      <div className={"addProd-input"}>
        <input
          type={"text"}
          placeholder={"Product name"}
          onChange={(e) => {
            setproductDetails({ ...productDetails, name: e?.target?.value });
          }}
          value={productDetails.name}
        />
        <textarea
          placeholder={"Description"}
          onChange={(e) => {
            setproductDetails({
              ...productDetails,
              description: e?.target?.value,
            });
          }}
          value={productDetails.description}
        />
        <input
          type={"text"}
          placeholder={"Image URL"}
          onChange={(e) => {
            setproductDetails({
              ...productDetails,
              avatar: e?.target?.value,
            });
          }}
          value={productDetails.avatar}
        />
        <select
          placeholder={"Category"}
          className={"addProd-right-filter"}
          // value={productDetails?.Category}
          onClick={(e) => {
            setproductDetails({
              ...productDetails,
              category: e?.target?.value,
            });
          }}
        >
          <option value="" disabled selected>
            Categories
          </option>
          {categories?.map((cat, index) => {
            return <option value={cat?.name}>{cat?.name}</option>;
          })}
        </select>
        <input
          type={"text"}
          placeholder={"Price"}
          onChange={(e) => {
            let tmp = e?.target?.value?.replace(/\D/g, "");
            setproductDetails({
              ...productDetails,
              price: Number(tmp),
            });
          }}
          value={productDetails.price === 0 ? "" : productDetails.price}
        />
        <button className={"add-submit-button"} onClick={OnSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AddProduct;

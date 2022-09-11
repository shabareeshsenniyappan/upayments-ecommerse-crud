import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import Filters from "../../Components/Filters/Filters";
import "./home.css";
import { getAllCategories, getProducts } from "./service";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const [products, setproducts] = useState([]);
  const [productsToShow, setproductsToShow] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selectedCategories, setselectedCategories] = useState("");

  useEffect(() => {
    //products api call
    getProducts()
      .then((items) => {
        setproducts(items?.products);
      })
      .catch((err) => {
        console.log(err, "errorProduct");
      });

    //categories api call
    getAllCategories()
      .then((e) => {
        setcategories(e);
      })
      .catch((err) => {
        console.log(err, "caterr");
      });
  }, []);

  if (selectedCategories) {
    let prod = products?.filter((prod) => {
      return prod.category === selectedCategories;
    });
    if (prod && JSON.stringify(prod) !== JSON.stringify(productsToShow)) {
      setproductsToShow(prod);
    }
  } else {
    if (products !== productsToShow) {
      setproductsToShow(products);
    }
  }

  return (
    <div>
      <Filters
        categories={categories}
        selectedCategories={(e) => {
          setselectedCategories(e);
        }}
      />
      <div className={"home-card-container"}>
        {productsToShow?.length === 0 ? (
          <div className="loader-container">Loading...</div>
        ) : (
          <>
            <div className={"home-card-click"}>
              {productsToShow?.map((prod) => {
                return (
                  <Cards
                    avatar={prod?.avatar}
                    title={prod?.name}
                    price={prod?.price}
                    id={prod?._id}
                  />
                );
              })}
            </div>
            <div id="mybutton">
              <button
                className={"add-new-prod"}
                onClick={() => navigate("/addNewProduct")}
              >
                +
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

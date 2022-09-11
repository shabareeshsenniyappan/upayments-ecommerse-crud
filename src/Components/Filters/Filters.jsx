import React from "react";
import "./filters.css";

function Filters({ categories, selectedCategories,value }) {
  return (
    <div className={"filter-container"}>
      <div>
        <input
          type={"text"}
          placeholder={"Apple watch, Samsung s22, Mackbook Pro, ..."}
          className={"left-filter"}
        />
      </div>
      <div>
        <select
          placeholder={"Category"}
          className={"right-filter"}
          // value={value}
          onClick={(e) => {
            selectedCategories(e?.target?.value || "");
          }}
        >
          <option value="" disabled selected>
            Categories
          </option>
          {categories?.map((cat, index) => {
            return <option value={cat?.name}>{cat?.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Filters;

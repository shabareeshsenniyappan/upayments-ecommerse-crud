import axios from "axios";
import { tokenId } from "../../constants";

export const getProducts = async () => {
  console.log(tokenId, "took");
  let product = await axios.get(
    "https://upayments-studycase-api.herokuapp.com/api/products",
    {
      headers: { Authorization: `Bearer ${tokenId}` },
    }
  );
  return product?.data;
};

export const getAllCategories = async () => {
  let categories = await axios.get(
    "https://upayments-studycase-api.herokuapp.com/api/categories/",
    {
      headers: { Authorization: `Bearer ${tokenId}` },
    }
  );
  return categories?.data?.categories;
};

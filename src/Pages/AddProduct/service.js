import axios from "axios";
import { tokenId } from "../../constants";

export const createProducts = async (product) => {
  let products = await axios.post(
    " https://upayments-studycase-api.herokuapp.com/api/products",
    product,
    {
      headers: { Authorization: `Bearer ${tokenId}` },
    }
  );
  // let products = axios({
  //   method: "post",
  //   url: " https://upayments-studycase-api.herokuapp.com/api/products",
  //   headers: { Authorization: `Bearer ${tokenId}` },
  //   data: {
  //     {Product},
  //   },
  // });
  return products;
  // {product},
  // Name: prod.Name,
  // Price: prod.Price,
  // Category: prod.Category,
  // Description: prod.Description,
  // Avatar: prod.Avatar,
  // DeveloperEmail: "shabareeshsenniyappan@gmail.com",
};

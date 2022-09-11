import axios from "axios";
import { tokenId } from "../../constants";

export const getProductDetail = async (id) => {
  let product = await axios.get(
    `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
    {
      headers: { Authorization: `Bearer ${tokenId}` },
    }
  );
  return product?.data?.product;
};

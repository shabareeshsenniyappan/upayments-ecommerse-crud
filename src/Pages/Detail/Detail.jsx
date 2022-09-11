import React, { useEffect, useState } from "react";
import Picture from "../../Components/Picture/Picture";
import "./detail.css";
import { useParams } from "react-router-dom";
import { getProductDetail } from "./service";

function Detail() {
  let { id } = useParams();
  const [productDetail, setproductDetail] = useState();
  useEffect(() => {
    getProductDetail(id).then((detail) => {
      setproductDetail(detail);
    });
  }, [id]);
  return (
    <div className={"detail-container"}>
      {!productDetail ? (
        <div className="loader-container">Loading...</div>
      ) : (
        <>
          <div className={"detail-flex-cont"}>
            <div className={"detail-img-container"}>
              <Picture avatar={productDetail?.avatar} />
            </div>
            <div className={"detail-text-cont"}>
              <div className={"detail-title"}>{productDetail?.name}</div>
              <div className={"detail-price"}>$ {productDetail?.price}</div>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className={"detail-desc-title"}>Description</div>
          <p className={"detail-desc"}>{productDetail?.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;

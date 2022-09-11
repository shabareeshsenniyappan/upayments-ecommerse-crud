import React from "react";
import "./picture.css";

function Picture({avatar}) {
  return (
    <div className={"picture-container"}>
      <img
        src={avatar}
        alt={'pic'}
        className={"pic-img"}
      />
    </div>
  );
}

export default Picture;

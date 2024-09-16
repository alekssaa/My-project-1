import React from "react";
import { useState } from "react";
const ProductImages = ({ images }) => {
  const [maineImg, setMaineImg] = useState(images[0].url);
  // ODradjeno samo za prva 4 proizvoda
  return (
    <>
      <img src={maineImg}></img>
      <div className="gallery">
        {images.map((image) => {
          return (
            <img
              src={image.url}
              className={`${image.url === maineImg ? "active-img" : ""}`}
              key={image.id}
              onClick={() => {
                setMaineImg(image.url);
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default ProductImages;

import React from "react";
import { preProductImg } from "../assets";

const ProductImages = ({ image, title }) => {
  return (
    <div className="mx-auto mb-12 w-52 md:mx-0">
      {/* single image */}
      <img src={image} alt={title} className="md:mb-4" />

      {/* images */}
      <div className="hidden gap-2 md:flex">
        <div className="w-16 rounded-xl border-2 border-gray-300">
          <img src={preProductImg} alt="preview" />
        </div>
        <div className="w-16 rounded-xl border-2 border-gray-300">
          <img src={preProductImg} alt="preview" />
        </div>
        <div className="w-16 rounded-xl border-2 border-gray-300">
          <img src={preProductImg} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;

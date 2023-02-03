import React, { useState } from "react";

const ProductColors = ({ colors, width, height, singleProduct }) => {
  const [mainColor, setMainColor] = useState(colors.at(-1));

  return (
    <div className="flex items-center -space-x-1">
      {colors.map((color, index) => {
        return (
          <span
            key={index}
            onClick={() => setMainColor(color)}
            className={`-mx-1 rounded-full ${
              singleProduct && "cursor-pointer"
            } ${width} ${height} ${
              singleProduct && mainColor === color
                ? "border-[3px] border-slate-800"
                : "border-[2px] border-white"
            } ${color}`}
          ></span>
        );
      })}
    </div>
  );
};

export default ProductColors;

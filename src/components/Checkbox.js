import React from "react";

const Checkbox = ({ title, colors }) => {
  // onChange = { updateFilters };

  const getColors = (title) => {
    switch (title) {
      case "bg-red-400":
        return "قرمز";

      case "bg-blue-400":
        return "آبی";

      case "bg-green-400":
        return "سبز";

      case "bg-yellow-400":
        return "زرد";

      case "bg-purple-400":
        return "بنفش";

      case "bg-gray-400":
        return "مشکی";
    }
  };

  return (
    <div className="my-5 mr-1.5 flex items-center text-xs lg:text-sm">
      <input
        type="checkbox"
        id={title}
        value={title}
        name={title}
        className="form-checkbox h-3 w-3 rounded-[3px] text-[#ff755d] focus:text-[#ff755d] focus:ring-0 focus:ring-offset-0"
      />

      <label htmlFor={title} className="mr-2 w-full cursor-pointer pl-40 text-slate-800">
        {colors && getColors(title)}
        {!colors && title}
      </label>
    </div>
  );
};

export default Checkbox;

import React from "react";

const RadioButton = ({ title }) => {
  return (
    <div className="my-5 mr-1.5 flex items-center">
      <input
        type="radio"
        id={title}
        value={title}
        name={title}
        className="form-radio h-3 w-3 rounded-[3px] text-red-400 focus:text-red-400 focus:ring-0 focus:ring-offset-0"
      />

      <label
        htmlFor={title}
        className="mr-2 w-full  cursor-pointer pl-40 text-[13px] text-slate-800"
      >
        {title}
      </label>
    </div>
  );
};

export default RadioButton;

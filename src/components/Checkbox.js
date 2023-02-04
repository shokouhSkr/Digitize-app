import React from "react";

import { useFilterContext } from "../store/context/filter_context";
import { getColorNames } from "../utils/helpers";

const Checkbox = ({ title, color }) => {
  const {
    filters: { checked },
    updateCheckbox,
  } = useFilterContext();

  return (
    <div className="my-5 mr-1.5 flex items-center">
      <input
        type="checkbox"
        id={title}
        name={title}
        checked={checked.indexOf(title) === -1 ? false : true}
        onChange={() => updateCheckbox(title)}
        className="form-checkbox h-3 w-3 rounded-[3px] text-red-400 focus:text-red-400 focus:ring-0 focus:ring-offset-0"
      />

      <label
        htmlFor={title}
        className="mr-2 w-full  cursor-pointer pl-40 text-[13px] text-slate-800"
      >
        {color && getColorNames(title)}
        {!color && title}
      </label>
    </div>
  );
};

export default Checkbox;

import React from "react";
import { sortOptions } from "../data";
import { Checkbox } from "../components";

const SortModal = () => {
  return (
    <section>
      <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">مرتب‌سازی</span>
      {sortOptions.map((item) => {
        const { id, title } = item;
        return <Checkbox key={id} title={title} />;
      })}
    </section>
  );
};

export default SortModal;

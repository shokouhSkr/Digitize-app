import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-span-3 row-span-2 hidden bg-yellow-300 md:block 3xl:col-span-2">
      <div className="sticky top-[108px] max-h-[calc(100vh_-_140px)] overflow-auto rounded-md bg-red-300 p-5 pb-8">
        sidebar
      </div>
    </aside>
  );
};

export default Sidebar;

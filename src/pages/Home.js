import React from "react";

import { useProductsContext } from "../store/context/products_context";
import { useFilterContext } from "../store/context/filter_context";
import {
  PageHero,
  Sidebar,
  Sortbar,
  Products,
  FilterButtons,
  Modal,
  Filters,
  SortModal,
} from "../components";

const Home = () => {
  const { isFilterModalOpen, isSortModalOpen, closeModal } = useProductsContext();

  const { clearFilters } = useFilterContext();

  const clearFilterHandler = () => {
    closeModal();
    clearFilters();
  };

  const clearSortHandler = () => {
    closeModal();
    // clearSort();
  };

  return (
    <main className="md:mt-[92px]">
      <PageHero title="محصولات" />
      <FilterButtons />

      <section className="mx-auto grid grid-cols-12 gap-x-5 gap-y-10 bg-[#f4f4f4] md:grid-rows-[55px_minmax(200px,_1fr)] md:p-4 md:px-[3%]">
        {isFilterModalOpen && (
          <Modal onClose={closeModal}>
            <Filters />
            <div className="mt-12 flex gap-4 md:hidden">
              <button
                type="button"
                onClick={closeModal}
                className="flex w-full items-center justify-center rounded-md border-2 border-red-400 bg-red-400 p-2 text-white"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={clearFilterHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#fc5d5d] bg-[#ffd1d1] p-2 text-red-400"
              >
                لغو فیلتر
              </button>
            </div>
          </Modal>
        )}

        {isSortModalOpen && (
          <Modal onClose={closeModal}>
            <SortModal />
            <div className="mt-12 flex gap-4 md:hidden">
              <button
                type="button"
                onClick={closeModal}
                className="flex w-full items-center justify-center rounded-md border-2 border-red-400 bg-red-400 p-2 text-white"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={clearSortHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#fc5d5d] bg-[#ffcbcb] p-2 text-red-400"
              >
                لغو فیلتر
              </button>
            </div>
          </Modal>
        )}

        <Sidebar />
        <Sortbar />
        <Products />
      </section>
    </main>
  );
};

export default Home;

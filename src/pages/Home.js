import React from "react";

import { useProductsContext } from "../store/context/products_context";
import { PageHero, Sidebar, Sortbar, Products, FilterButtons, Modal, Filters } from "../components";

const Home = () => {
  const { isFilterModalOpen, closeFilterModal, isSortModalOpen, closeSortModal } =
    useProductsContext();

  const filterHandler = () => {
    // filterProducts()
    closeFilterModal();
  };

  const clearFilterHandler = () => {
    // clearFilters()
    closeFilterModal();
  };

  return (
    <main className="md:mt-[92px]">
      <PageHero title="محصولات" />
      <FilterButtons />

      <section className="mx-auto grid grid-cols-12 gap-x-5 gap-y-10 bg-[#f4f4f4] md:grid-rows-[55px_minmax(500px,_1fr)] md:p-4">
        {isFilterModalOpen && (
          <Modal onClose={closeFilterModal}>
            <Filters />
            <div className="mt-6 flex gap-4 md:hidden">
              <button
                type="button"
                onClick={filterHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#ff755d] bg-[#ff755d] p-2 text-white"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={clearFilterHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#fc5d5d] bg-[#ffcbcb] p-2 text-[#ff755d]"
              >
                لغو فیلتر
              </button>
            </div>
          </Modal>
        )}
        {isSortModalOpen && <Modal onClose={closeSortModal}>{/* <SortProducts /> */}</Modal>}

        <Sidebar />
        <Sortbar />
        <Products />
      </section>
    </main>
  );
};

export default Home;

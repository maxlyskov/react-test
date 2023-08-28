import React, { useState } from "react";
import Table from "../Table/Table";
import { tableData } from "../../sampleData";
import Select from "../UI/Select";
import Input from "../UI/Input";

const perPageOptions = [
  { value: "2", label: "2 rows" },
  { value: "5", label: "5 rows" },
  { value: "10", label: "10 rows" },
];

const statusOptions = [
  { value: "All Statuses", label: "All Statuses" },
  { value: "Live", label: "Live" },
  { value: "Past", label: "Past" },
];

const Stories = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All Statuses");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleCurrentPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(+event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
    setCurrentPage(1);
  };

  const filteredData = tableData.filter((item) => {
    const searchMatch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase());
    const statusMatch =
      selectedStatus === "All Statuses" || item.status === selectedStatus;
    return searchMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  return (
    <section className="pt-4 px-6 w-full overflow-x-hidden mb-10">
      <div className="flex justify-between mb-5">
        <h3 className="text-3xl font-bold">Stories</h3>
        <button className="xl:hidden bg-[#1DB56C] rounded-sm px-4 py-2 inline-flex justify-center items-center gap-1 font-medium text-white transition-colors duration-200 hover:bg-green-700">
          <img src="./assets/images/plus.svg" alt="" width={12} height={12} />
          <span>New Story</span>
        </button>
      </div>
      <div className="flex gap-4 sm:gap-7 items-center">
        <div className="relative w-full md:w-[376px]">
          <Input
            type="text"
            placeholder="Search"
            classNames="w-full"
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <button className="absolute bg-[#D3D4D9] w-10 h-full flex justify-center items-center right-0 top-0 rounded-[0_6px_6px_0]">
            <img
              src="./assets/images/search.svg"
              alt=""
              width={12}
              height={12}
            />
          </button>
        </div>
        <Select
          value={selectedStatus}
          onChange={handleStatusChange}
          options={statusOptions}
          name="statuses"
          classNames="w-full md:w-[200px]"
        />
        <p className="text-sm hidden lg:block">
          Showing 1 to {itemsPerPage} of {tableData.length}
        </p>
        <button className="ml-auto hidden xl:flex col-start-3 md:col-span-1 order-1 md:order-3 bg-[#1DB56C] rounded-sm px-4 py-2 justify-center items-center gap-1 font-medium text-white transition-colors duration-200 hover:bg-green-700">
          <img src="./assets/images/plus.svg" alt="" />
          <span>New Story</span>
        </button>
      </div>

      <Table currentItems={currentItems} />
      <div className="flex justify-center items-center gap-4 sm:gap-0 sm:justify-end flex-wrap  mt-4">
        <div className="flex gap-2 flex-wrap justify-center items-center sm:block">
          Page
          <Input
            type="number"
            value={currentPage}
            onChange={handleCurrentPage}
            placeholder=""
            classNames="w-16 h-8 mx-2"
          />
          of {totalPages}
          <Select
            name="perpage"
            onChange={handlePerPageChange}
            classNames="min-w-[110px] text-sm mx-5"
            options={perPageOptions}
            value={itemsPerPage}
          />
        </div>
        <div>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mr-2 rounded-md p-3 border border-[#BBBCC2] ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
            aria-label="Previous Page"
          >
            <img src="./assets/images/arrow-left.svg" alt="Previous" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mr-2 rounded-md p-3 border border-[#BBBCC2] ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
            aria-label="Next Page"
          >
            <img src="./assets/images/arrow-right.svg" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;

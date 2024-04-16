import React from "react";

export const Search = () => {
  return (
    <div className="flex justify-between items-center border rounded-3xl overflow-hidden bg-gray-100 py-[7px] px-[16px]">
      <i class="ri-search-line text-sm mr-2"></i>
      <input
        type="text"
        className="text-[13px] w-[260px] font-medium bg-transparent focus:outline-none"
        placeholder="Search people here..."
      />
    </div>
  );
};

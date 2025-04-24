import React, { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="self-stretch w-[735px] bg-white border min-w-60 text-gray-400 whitespace-nowrap flex-wrap px-[30px] py-2 rounded-[5px] border-[rgba(110,126,146,1)] border-solid max-md:max-w-full max-md:px-5">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;

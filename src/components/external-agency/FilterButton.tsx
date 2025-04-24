import React, { useState } from "react";

interface FilterButtonProps {
  type: "Status" | "Filters";
  options?: string[];
  onSelect?: (option: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  type,
  options = ["All", "Approve", "Pending", "Rejected"],
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const getIconSrc = () => {
    return type === "Status" ? "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/2cac1606eeecf2b5831f7e30795db144e9f5730e?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/a6fb0ff477edd58d03de6c6a4fe5c986d202076a?placeholderIfAbsent=true";
  };

  return (
    <div className="relative">
      <div
        className="bg-white border flex min-h-9 items-center gap-5 justify-center w-[143px] px-2.5 py-1.5 rounded-[5px] border-[rgba(110,126,146,1)] border-solid cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={getIconSrc()}
          className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
          alt={`${type} icon`}
        />
        <div className="self-stretch my-auto">{type}</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/1b8425da5f813e10f935d390342e82a2b543fb44?placeholderIfAbsent=true"
          className="aspect-[3] object-contain w-3 self-stretch shrink-0 my-auto"
          alt="Dropdown arrow"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[rgba(110,126,146,1)] rounded-[5px] z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selected === option ? "bg-gray-100" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;

import React from "react";

interface DocumentButtonProps {
  documentName: string;
}

const DocumentButton: React.FC<DocumentButtonProps> = ({ documentName }) => {
  return (
    <div className="self-stretch whitespace-nowrap w-[155px] my-auto">
      <div className="bg-[rgba(249,249,249,1)] border-gray-300 border flex items-stretch gap-[3px] px-4 py-[5px] rounded-[27px] border-solid max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/e4affde7f2ae1c756d1c75a95ad06f816bde099c?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0 my-auto"
          alt="Document icon"
        />
        <div>{documentName}</div>
      </div>
    </div>
  );
};

export default DocumentButton;

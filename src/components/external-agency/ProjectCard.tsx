
import React from "react";
import StatusBadge from "./StatusBadge";
import DocumentButton from "./DocumentButton";

interface Document {
  name: string;
}

interface ProjectCardProps {
  projectName: string;
  status: "Approve" | "Pending" | "Rejected";
  date: string;
  description: string;
  documents: Document[];
  discussionIconSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  status,
  date,
  description,
  documents,
  discussionIconSrc,
}) => {
  // Display only the first 3 documents and show "+X more" for the rest
  const displayedDocuments = documents.slice(0, 3);
  const remainingCount = documents.length - displayedDocuments.length;

  return (
    <div className="bg-white border w-full mt-[30px] px-10 py-5 rounded-[10px] border-[rgba(110,126,146,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center gap-[9px] flex-wrap max-md:max-w-full">
          <div className="text-gray-900 text-3xl font-medium self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            {projectName}
          </div>
          <div className="self-stretch text-xs text-black font-normal whitespace-nowrap w-20 my-auto">
            <StatusBadge status={status} />
          </div>
        </div>
        <div className="text-[rgba(96,105,117,1)] text-[15px] font-light">
          {date}
        </div>
      </div>
      <div className="w-full font-normal mt-5 max-md:max-w-full">
        <div className="text-[rgba(96,105,117,1)] text-xl max-md:max-w-full">
          {description}
        </div>
        <div className="flex w-full gap-[9px] flex-wrap mt-[5px] max-md:max-w-full">
          <div className="flex min-w-60 items-center gap-[9px_15px] text-xl text-black flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
            {displayedDocuments.map((doc, index) => (
              <DocumentButton key={index} documentName={doc.name} />
            ))}
            {remainingCount > 0 && (
              <div className="text-[rgba(96,105,117,1)] text-base self-stretch my-auto">
                +{remainingCount} more
              </div>
            )}
          </div>
          <div className="text-lg text-white whitespace-nowrap w-[180px]">
            <div className="bg-slate-900 flex items-center justify-center gap-1 px-[18px] py-[7px] rounded-[28px] max-md:px-5">
              <img
                src={discussionIconSrc}
                className="aspect-[1] object-contain w-5 shrink-0 mr-2"
                alt="Discussion icon"
              />
              <div>Discussion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

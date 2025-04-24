import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import ProjectCard from "./ProjectCard";

// Sample project data
const projectsData = [
  {
    id: 1,
    projectName: "Project Name I",
    status: "Approve" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/07fbdf35c1173419df80479a9a6c3f18128a1eb8?placeholderIfAbsent=true",
  },
  {
    id: 2,
    projectName: "Project Name A I",
    status: "Pending" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/f53fa36cb0a1f0cc3926d703e15f2ff1361518e7?placeholderIfAbsent=true",
  },
  {
    id: 3,
    projectName: "Project Name I",
    status: "Approve" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/e2cbbfd8528cd8e337bc21dd0dd1f05ab7bc949a?placeholderIfAbsent=true",
  },
  {
    id: 4,
    projectName: "Project Name AA II",
    status: "Rejected" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/d31250fb4b4ac91527bec4a41685ee12f4b2040e?placeholderIfAbsent=true",
  },
  {
    id: 5,
    projectName: "Project Name I",
    status: "Approve" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/c740af67cd04c5befacb15f9a03e4dd085430eb9?placeholderIfAbsent=true",
  },
  {
    id: 6,
    projectName: "Project Name A I",
    status: "Pending" as const,
    date: "Date: YYYY/MM/DD",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    documents: [
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
      { name: "Doc.pdf" },
    ],
    discussionIconSrc: "https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/110c9ffcc028ae26b12ff7dc0a81d8c898334609?placeholderIfAbsent=true",
  },
];

const ExternalAgency: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter projects based on search query and status filter
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white px-[82px] max-md:px-5">
      <header className="self-stretch w-full bg-white border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center px-[463px] py-3 border-b max-md:max-w-full max-md:px-5">
        External Agency
      </header>

      <main className="bg-[rgba(247,248,250,1)] flex w-full items-center gap-2.5 mt-[42px] p-[33px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <section className="bg-[rgba(246,250,254,1)] border-gray-300 border self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto px-10 py-[35px] rounded-[10px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex w-full items-center gap-[20px_100px] justify-between flex-wrap max-md:max-w-full">
            <h1 className="text-black text-4xl font-semibold self-stretch w-[296px] my-auto">
              External Agency
              <br />
            </h1>
            <div className="shadow-[0px_1px_4px_rgba(0,0,0,0.25)] self-stretch w-[133px] my-auto border border-gray-300 rounded-[10px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/783df025172c9bda28ab127fdfbb017642408103?placeholderIfAbsent=true"
                className="aspect-[3.32] object-contain w-[133px] z-10 rounded-[10px]"
                alt="Add button"
              />
            </div>
          </div>

          <div className="flex w-full gap-[20px_87px] text-base font-normal justify-between flex-wrap mt-[30px] max-md:max-w-full">
            <SearchBar onSearch={setSearchQuery} />

            <div className="flex min-w-60 gap-5 text-gray-900 leading-loose">
              <FilterButton
                type="Status"
                options={["All", "Approve", "Pending", "Rejected"]}
                onSelect={setStatusFilter}
              />
              <FilterButton type="Filters" />
            </div>
          </div>

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id.toString()}
              projectName={project.projectName}
              status={project.status}
              date={project.date}
              description={project.description}
              documents={project.documents}
              discussionIconSrc={project.discussionIconSrc}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ExternalAgency;

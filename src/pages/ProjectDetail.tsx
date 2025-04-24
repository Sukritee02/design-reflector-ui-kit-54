
import React from "react";
import { useParams } from "react-router-dom";

interface ProjectInformation {
  program: string;
  startedDate: string;
  identificationNo: string;
  deadlineDate: string;
  selectedContractor: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projectInfo: ProjectInformation = {
    program: "Backend Developer",
    startedDate: "YYYY/MM/DD",
    identificationNo: "B.No. 000XXX",
    deadlineDate: "YYYY/MM/DD",
    selectedContractor: "XYZ Company Pvt Ltd.",
  };

  return (
    <div className="bg-white">
      <header className="border-b border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center py-3">
        External Agency
      </header>
      
      <div className="max-w-[1200px] mx-auto p-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Project name</h1>
            <div className="bg-[rgba(218,251,225,1)] text-[rgba(26,127,55,1)] px-4 py-1 rounded-full">
              Approve
            </div>
          </div>
          
          <p className="text-gray-600 mt-2">Date: YYYY/MM/DD at 00:00 AM</p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <div className="space-y-2">
              <div className="flex gap-4">
                <span className="w-40">Program</span>
                <span>: {projectInfo.program}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-40">Started Date</span>
                <span>: {projectInfo.startedDate}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-40">Identification No.</span>
                <span>: {projectInfo.identificationNo}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-40">Deadline Date</span>
                <span>: {projectInfo.deadlineDate}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-40">Selected Contractor</span>
                <span>: {projectInfo.selectedContractor}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Description:</h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum?
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Documents Required:</h2>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="bg-[rgba(249,249,249,1)] border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/e4affde7f2ae1c756d1c75a95ad06f816bde099c"
                    alt="Document"
                    className="w-5 h-5"
                  />
                  <span>Doc.pdf</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Remarks:</h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum?
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/07fbdf35c1173419df80479a9a6c3f18128a1eb8"
                alt="Discussion"
                className="w-5 h-5"
              />
              Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

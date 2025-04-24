import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

interface ProjectInformation {
  program: string;
  startedDate: string;
  identificationNo: string;
  deadlineDate: string;
  selectedContractor: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const projectInfo: ProjectInformation = {
    program: "Backend Developer",
    startedDate: "YYYY/MM/DD",
    identificationNo: "B.No. 000XXX",
    deadlineDate: "YYYY/MM/DD",
    selectedContractor: "XYZ Company Pvt Ltd.",
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <header className="bg-white border-b border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center py-3">
        External Agency
      </header>
      
      <div className="max-w-[1200px] mx-auto p-8 space-y-2.5">
        {/* First Box: Project Details */}
        <div className="bg-[#F6FAFE] rounded-[10px] p-8 shadow-sm border border-[#E5E7EB]/60">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Project name</h1>
              <p className="text-gray-600 text-sm">Date: YYYY/MM/DD at 00:00 AM</p>
            </div>
            <div className="bg-[#DAF7E1] text-[#1A7F37] px-4 py-1 rounded-full text-sm">
              Approve
            </div>
          </div>

          <p className="text-gray-800 mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque,
          </p>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <div className="space-y-3">
              <div className="flex">
                <span className="w-48">Program</span>
                <span className="text-gray-600">: {projectInfo.program}</span>
              </div>
              <div className="flex">
                <span className="w-48">Started Date</span>
                <span className="text-gray-600">: {projectInfo.startedDate}</span>
              </div>
              <div className="flex">
                <span className="w-48">Identification No.</span>
                <span className="text-gray-600">: {projectInfo.identificationNo}</span>
              </div>
              <div className="flex">
                <span className="w-48">Deadline Date</span>
                <span className="text-gray-600">: {projectInfo.deadlineDate}</span>
              </div>
              <div className="flex">
                <span className="w-48">Selected Contractor</span>
                <span className="text-gray-600">: {projectInfo.selectedContractor}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Description:</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Documents Required:</h2>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="bg-[#F9F9F9] border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 text-sm"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/840c22dc74df49a5a134b6b564950834/e4affde7f2ae1c756d1c75a95ad06f816bde099c"
                    alt="Document"
                    className="w-4 h-4"
                  />
                  <span>Doc.pdf</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => navigate(`/project/${id}/discussion`)}
            className="bg-[#121826] text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-black transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Discussion
          </button>
        </div>

        {/* Second Box: Remarks */}
        <div className="bg-[#F6FAFE] rounded-[10px] p-8 shadow-sm border border-[#E5E7EB]/60">
          <h2 className="text-lg font-semibold mb-4">Remarks:</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

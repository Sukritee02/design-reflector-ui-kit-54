import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <header className="bg-white border-b border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center py-3">
        External Agency
      </header>
      
      <main className="max-w-[1200px] mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Input placeholder="Search..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="ux">UX Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={() => navigate("/project/new")} className="bg-[#121826] hover:bg-black">
            New Project
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white rounded-md shadow-sm p-4 border border-[#E5E7EB]/60">
              <h2 className="text-lg font-semibold mb-2">Project Name {id}</h2>
              <p className="text-gray-600 text-sm mb-4">
                Last Updated: January 18, 2024
              </p>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod ante vel libero hendrerit, eu imperdiet nunc aliquet.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;


import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NewProject = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <header className="bg-white border-b border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center py-3">
        External Agency
      </header>
      
      <div className="max-w-[1200px] mx-auto p-8 space-y-2.5">
        <form onSubmit={handleSubmit}>
          <div className="bg-[#F6FAFE] rounded-[10px] p-8 shadow-sm border border-[#E5E7EB]/60">
            <h2 className="text-xl font-semibold mb-6">Project description</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name</label>
                <Input placeholder="Type here" maxLength={100} />
                <p className="text-xs text-gray-500 mt-1">Text Limit 100 characters only</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">One line description about Project</label>
                <Input placeholder="Type here" maxLength={200} />
                <p className="text-xs text-gray-500 mt-1">Text Limit 200 character only</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Important Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Program</label>
                    <Input placeholder="Type here" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Started Date</label>
                      <div className="grid grid-cols-3 gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="DD" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                              <SelectItem key={day} value={String(day)}>{String(day).padStart(2, '0')}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="MM" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                              <SelectItem key={month} value={String(month)}>{String(month).padStart(2, '0')}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="YYYY" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 10}, (_, i) => new Date().getFullYear() - i).map(year => (
                              <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Deadline Date</label>
                      <div className="grid grid-cols-3 gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="DD" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                              <SelectItem key={day} value={String(day)}>{String(day).padStart(2, '0')}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="MM" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                              <SelectItem key={month} value={String(month)}>{String(month).padStart(2, '0')}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="YYYY" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({length: 10}, (_, i) => new Date().getFullYear() - i).map(year => (
                              <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Identification No</label>
                    <Input placeholder="Type here" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Selected Contractor</label>
                    <Input placeholder="Type here" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Description</h3>
                <textarea 
                  placeholder="Type here" 
                  className="w-full h-40 p-3 rounded-md border border-input bg-background text-sm resize-none"
                  maxLength={600}
                />
                <p className="text-xs text-gray-500 mt-1">Word Limit 600 character</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Upload Required Document</h3>
                <Button variant="outline" className="bg-[#121826] text-white hover:bg-black">
                  Attach files
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#F6FAFE] rounded-[10px] p-8 mt-2.5 shadow-sm border border-[#E5E7EB]/60">
            <h2 className="text-xl font-semibold mb-6">Remarks</h2>
            <textarea 
              placeholder="Type here" 
              className="w-full h-40 p-3 rounded-md border border-input bg-background text-sm resize-none"
              maxLength={400}
            />
            <p className="text-xs text-gray-500 mt-1">Word Limit 400 character</p>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" type="button" onClick={() => navigate("/")}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;

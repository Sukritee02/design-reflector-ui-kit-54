
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Comment {
  id: number;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  content: string;
}

const Discussion = () => {
  const { id } = useParams();

  const comments: Comment[] = [
    {
      id: 1,
      user: {
        name: "Ulopa",
        role: "Author",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      },
      date: "Jan 17, 2024 at 2:10 PM",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl.",
    },
    {
      id: 2,
      user: {
        name: "Qwerty",
        role: "Maintainer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      },
      date: "Jan 17, 2024 at 3:30 PM",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
  ];

  return (
    <div className="bg-white">
      <header className="border-b border-gray-300 min-h-[78px] text-4xl text-black font-semibold text-center py-3">
        External Agency
      </header>
      
      <div className="max-w-[1200px] mx-auto p-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-semibold">Project name</h1>
              <p className="text-gray-600">Discussion on Project Name</p>
            </div>
            <div className="bg-[rgba(218,251,225,1)] text-[rgba(26,127,55,1)] px-4 py-1 rounded-full">
              Approve
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-white border px-4 py-1 rounded-full">Newest</button>
            <button className="bg-white border px-4 py-1 rounded-full">Oldest</button>
          </div>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-6 last:border-b-0">
                <div className="flex gap-4">
                  <img
                    src={comment.user.avatar}
                    alt={comment.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.user.name}</span>
                      <span className="text-gray-500 text-sm">{comment.date}</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                        {comment.user.role}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <textarea
              placeholder="Write a reply"
              className="w-full border rounded-lg p-4 min-h-[100px]"
            />
            <div className="flex justify-end mt-4">
              <Button>Comment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;

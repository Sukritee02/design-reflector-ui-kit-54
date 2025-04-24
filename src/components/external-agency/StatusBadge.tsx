import React from "react";

type StatusType = "Approve" | "Pending" | "Rejected";

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Approve":
        return {
          bg: "bg-[rgba(218,251,225,1)]",
          border: "border-[rgba(26,127,55,1)]",
        };
      case "Pending":
        return {
          bg: "bg-[rgba(250,251,218,1)]",
          border: "border-[rgba(247,255,0,1)]",
        };
      case "Rejected":
        return {
          bg: "bg-[rgba(205,146,132,1)]",
          border: "border-[rgba(228,87,53,1)]",
        };
      default:
        return {
          bg: "bg-gray-200",
          border: "border-gray-400",
        };
    }
  };

  const { bg, border } = getStatusStyles();

  return (
    <div className={`${bg} border p-2 rounded-[23px] ${border} border-solid`}>
      {status}
    </div>
  );
};

export default StatusBadge;

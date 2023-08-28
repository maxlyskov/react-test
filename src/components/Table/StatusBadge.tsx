import React from "react";

const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = "";

  if (status === "Draft" || status === "Scheduled") {
    bgColor = "bg-[#1C62EB]";
  } else if (status === "Live") {
    bgColor = "bg-[#1DB56C]";
  } else if (status === "Past") {
    bgColor = "bg-[#A3A3A3]";
  }

  return (
    <span
      className={`px-[7px] py-[2px] rounded-sm ${bgColor} font-bold text-xs text-white`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;

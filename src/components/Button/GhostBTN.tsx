"use client";
import React from "react";

interface CusButtonProps {
  text: string;
  onClick: () => void;
}

// const InfoItem = ({ title, year, place }: InfoItemProps) => {
const GhostBTN = ({ text, onClick }: CusButtonProps) => {
  return (
    <button
      className="group block text-white text-lg transition duration-300 hover:text-accent-500 focus:text-accent-700"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span>{text}</span>
        {/* trailing item, ví dụ như icon hoặc dấu → */}
        <span className="material-icons opacity-0 transform translate-x-[-24px] group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0 transition duration-300">
          arrow_outward
        </span>
      </div>
    </button>
  );
};

export default GhostBTN;
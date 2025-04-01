import React from "react";
// import { Interface } from "readline";

interface CusButtonProps {
  text: string;
  onClick: () => void;
}

// const InfoItem = ({ title, year, place }: InfoItemProps) => {
const LinkBTN = ({ text, onClick }: CusButtonProps) => {
  return (
    <button className="text-white text-lg" onClick={onClick}>
      {text}
    </button>
  );
};

export default LinkBTN;
import React from "react";

interface IconProps {
  name: string;
  size?: string; // Kích thước mặc định
  color?: string; // Màu sắc mặc định
  variant?: "outlined" | "round" | "sharp" | "two-tone"; // Các kiểu icon
  className?: string; // Thêm custom class nếu cần
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "text-2xl", // Default size
  color = "text-black", // Default color
  variant = "", // Default kiểu mặc định
  className = "",
}) => {
  return (
    <span className={`material-icons${variant ? `-${variant}` : ""} ${size} ${color} ${className}`}>
      {name}
    </span>
  );
};

export default Icon;
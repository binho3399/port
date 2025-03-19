import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";

interface ServiceProps {
  title: string;
  description: string;
  href: string;
}

function Services({ title, description, href }: ServiceProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [duration, setDuration] = useState(100); // Giá trị mặc định

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = textRef.current.parentElement?.clientWidth || 200;
      const newDuration = Math.max(5, (textWidth / containerWidth) * 3); // Tính thời gian cuộn động
      setDuration(newDuration);
    }
  }, [description]);

  return (
    <div
      // href={href}
      className="relative flex items-center space-x-2 text-white group"
    >
      {/* Mũi tên */}
      <span className="relative inline-block w-6 h-6">
        {/* Mũi tên ban đầu (trắng) */}
        <span className="arrow-default text-white">
          <span className="material-icons xl:text-[36px]">arrow_outward</span>
        </span>

        {/* Mũi tên khi hover (accent-500) */}
        <span className="arrow-hover text-accent-500">
          <span className="material-icons xl:text-[36px]">arrow_outward</span>
        </span>
      </span>

      {/* Tiêu đề */}
      <span className="2xl:text-3xl">{title}</span>

      {/* Chữ nhỏ khi hover */}
      <div className="flex fading-text">
        <span className="scrolling-text flex flex-1 xl:text-2xl text-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ref={textRef}
          style={{ animationDuration: `${duration}s` }} // Cập nhật tốc độ cuộn
        >
          {description}
        </span>
      </div>
    </div>
  );
}

const MyServices: React.FC = () => (
  <div className="container mx-auto flex flex-col gap-8 py-[64px]">
    <div className="flex flex-row gap-8">
      <Services
        title="Design Consultancy"
        description="Product Manager, Design Project Manager, Design Strategy, UX/UI Consultant, "
        href=""
      />
      <Services
        title="Design Consultancy"
        description="Product Manager, Design Project Manager, Design Strategy, UX/UI Consultant, "
        href=""
      />
      <Services
        title="Design Consultancy"
        description="Product Manager, Design Project Manager, Design Strategy, UX/UI Consultant, "
        href=""
      />
    </div>
  </div>
);

export default MyServices;
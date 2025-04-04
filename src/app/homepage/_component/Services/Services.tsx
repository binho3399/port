"use client";

import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";

interface ServiceProps {
  title: string;
  description: string;
  href: string;
}

function Services({ title, description, href }: ServiceProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [duration, setDuration] = useState(5); // Giá trị mặc định

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = textRef.current.parentElement?.clientWidth || 200;
      const calculatedDuration = Math.max(5, (textWidth / containerWidth) * 2.5); // Tối ưu hệ số
      if (calculatedDuration !== duration) setDuration(calculatedDuration);
    }
  }, [description, duration]); // Thêm `duration` để tránh cập nhật liên tục

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
        <span
          className="scrolling-text flex flex-1 xl:text-2xl text-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ref={textRef}
          style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties} // Dùng biến CSS
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
      <h3 className="text-white xl:text-8xl font-bold">What can i do</h3>
      <h3 className="text-accent-500 xl:text-8xl animate-spin-slow">✺</h3>
    </div>
    <div className="flex flex-col gap-8">
      <Services
        title="Design Consutancy"
        description="Product Manager, Design Project Manager and Design Strategy, "
        href="/services/ui-ux-design"
      />
      <Services
        title="UX/UI Design"
        description="Research, Scenarios,  Wireframe, Prototyping, Usability Testing, Information Architect, Interface Design, Interaction Design, Visual Design, "
        href="/services/ui-ux-design"
      />
      <Services
        title="Design System"
        description="Component Library Creation, Design Guidlines & Documentations, Accessibility Standards, Design Systems Governance, User Testing and Feedback Integration, Design Tool Integration, Design System Advocacy and Education, "
        href="/services/ui-ux-design"
      />
      <Services
        title="Front-end Development"
        description="Designing user interfaces and user experiences for web and mobile applications."
        href="/services/ui-ux-design"
      />
      <Services
        title="No-code Development"
        description="Responsive website development, UI Design, Prototype developement, UX Optimization, Mobile App development, Custom Solution Development, Process automation, 3rd party integration, "
        href="/services/ui-ux-design"
      />
    </div>
  </div>
);

export default MyServices;

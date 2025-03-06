"use client";
import { useState } from "react";

interface ServiceProps {
  title: string;
  description: string;
  href: string;
}

export default function Services({ title, description, href }: ServiceProps) {
  return (
    <a
      href={href}
      className="relative flex items-center space-x-2 text-white group"
    >
      {/* Mũi tên */}
      <span className="relative inline-block w-6 h-6">
        {/* Mũi tên ban đầu (trắng) */}
        <span className="arrow-default text-white">
          <span className="material-icons 2xl:text-2xl">arrow_outward</span>
        </span>

        {/* Mũi tên khi hover (accent-500) */}
        <span className="arrow-hover text-accent-500">
          <span className="material-icons 2xl:text-2xl">arrow_outward</span>
        </span>
      </span>

      {/* Tiêu đề */}
      <span className="2xl:text-2xl">{title}</span>

      {/* Chữ nhỏ khi hover */}
      <span 
        className="absolute left-full ml-4 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {description}
      </span>
    </a>
  );
}
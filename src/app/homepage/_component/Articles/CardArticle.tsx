"use client";
import { Chips } from "@/components/Chips";
import React from "react";

interface CardArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export const CardArticle: React.FC<CardArticleProps> = ({ title, description, imageUrl, href }) => {
  return (
    <div className="p-8 rounded-xl flex gap-6 shadow-lg bg-white bg-opacity-5 rounded-2xl overflow-hidden border-4 border-white border-opacity-5 backdrop-blur-sm">
      {/* <div className="absolute inset-0 noise-bg z-[-1]"></div> */}
      
      {/* Nội dung bên trái */}
      <div className="flex flex-col flex-1 justify-between gap-8">
        <div className="flex gap-2">
          <Chips label="Example Chip" />
          <Chips label="Example Chip" />
          <Chips label="Example Chip" />
        </div>
        <div className="flex flex-col gap-6">
          <img src={imageUrl} alt={title} className="rounded-xl shadow-md object-cover w-1/3 h-auto ml-auto aspect-[4/3] border border-white" />
          <img src={imageUrl} alt={title} className="rounded-xl shadow-md object-cover w-full h-auto aspect-[16/9] border border-white" />
        </div>
      </div>

      {/* Nội dung bên phải */}
      <div className="flex flex-1 flex-col text-left gap-10">
        <div>
          <img src={imageUrl} alt={title} className="w-full object-cover h-auto aspect-[4/3] rounded-xl border border-white"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>

          {/* Nút bấm */}
          <a href={href} className="mt-4 inline-block bg-[#F8E71C] text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#E5D60E] transition duration-300">
            SEE LIVE PROJECT
          </a>
        </div>
      </div>
    </div>
  );
};
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  year: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  imageUrl,
  link,
  year
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="group relative block w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="relative flex items-center justify-between py-8 transition-all duration-300 ease-in-out">
        {/* Left content */}
        <div className="flex flex-col gap-4">
          <span className="text-sm text-white/50 transition-colors group-hover:text-white/70">
            {year}
          </span>
          <h2 className="text-4xl font-light text-white group-hover:text-accent-500 transition-colors">
            {title}
          </h2>
          <p className="max-w-xl text-lg text-white/70 group-hover:text-white transition-colors">
            {description}
          </p>
        </div>

        {/* Right image with hover effect */}
        <div className="relative w-[300px] aspect-video overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className={`object-cover transition-transform duration-500 ease-out
              ${isHovered ? 'scale-110' : 'scale-100'}`}
            priority
          />
        </div>
      </article>
    </Link>
  );
};

export default Article;
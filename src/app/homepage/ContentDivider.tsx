"use client";

import React from "react";
import { useEffect, useRef } from "react";

const generateScrollingContent = (text: string, count: number) => {
    const content = [];
    for (let i = 0; i < count; i++) {
        content.push(
            <React.Fragment key={i}>
                <span className="text-white xl:text-8xl font-thin">{text}</span>
                <span className="text-accent-500 xl:text-8xl animate-spin-slow">✺</span>
                <span className="text-white opacity-50 xl:text-8xl font-thin">2019 – 2024</span>
                <span className="text-accent-500 xl:text-8xl animate-spin-slow">✺</span>
            </React.Fragment>
        );
    }
    return content;
};

export const ContentDivider: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let start = Date.now();
        let speed = .15; // Tốc độ cuộn

        const scroll = () => {
            let elapsed = Date.now() - start;
            let offset = (elapsed * speed) % el.scrollWidth;
            el.style.transform = `translateX(${-offset}px)`;
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

    return (
        <div className="container mx-auto flex w-full py-[64px] border-b-[1px] border-white overflow-hidden fading-text">
            {/* Dòng chạy ngang */}
            <div ref={ref} className="whitespace-nowrap flex flex-1 items-center gap-8 translate-x-full">
                {generateScrollingContent("SELECTED PROJECTS", 50)}
                {/* {generateScrollingContent("SELECTED PROJECTS", 10)} */}
            </div>
        </div>
    );
};

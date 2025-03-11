"use client";

import React from "react";
import { useEffect, useRef, useMemo, useState } from "react";

const generateScrollingContent = (text: string, count: number) => {
    return Array.from({ length: count }, (_, i) => (
        <React.Fragment key={i}>
            <span className="text-white xl:text-8xl font-thin">{text}</span>
            <span className="text-accent-500 xl:text-8xl animate-spin-slow">✺</span>
            <span className="text-white opacity-50 xl:text-8xl font-thin">2019 – 2024</span>
            <span className="text-accent-500 xl:text-8xl animate-spin-slow">✺</span>
        </React.Fragment>
    ));
};

export const ContentDivider: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    const content = useMemo(() => generateScrollingContent("SELECTED PROJECTS", 50), []);

    useEffect(() => {
        let animationFrameId: number;
        let start = Date.now();
        const speed = 0.05; // Tốc độ cuộn

        const scroll = () => {
            let elapsed = Date.now() - start;
            setOffset((elapsed * speed) % (ref.current?.scrollWidth || 1));
            animationFrameId = requestAnimationFrame(scroll);
        };

        scroll();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="container mx-auto flex w-full py-[64px] border-b-[1px] border-white overflow-hidden fading-text">
            <div
                ref={ref}
                className="whitespace-nowrap flex flex-1 items-center gap-8"
                style={{ transform: `translateX(-${offset}px)` }}
            >
                {content}
            </div>
        </div>
    );
};

"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

const ServiceItem: React.FC = () => {
    return (
        <div className="container mx-auto relative flex items-center space-x-2 text-white group">
            {/* Mũi tên */}
            <span className="relative inline-block w-6 h-6">
                {/* Mũi tên ban đầu (trắng) */}
                <span className="arrow-default text-white">
                    <span className="material-icons xl:text-[36px]">arrow_outward</span>
                </span>

                {/* Mũi tên khi hover (accent-500) */}
                <span className="arrow-hover text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-icons xl:text-[36px]">arrow_outward</span>
                </span>
            </span>

            {/* Tiêu đề */}
            <span className="2xl:text-3xl">Design Consultancy</span>

            {/* Chữ nhỏ khi hover */}
            <div className="flex fading-text">
                {/* <div className="flex scrolling-text"> */}
                <span className="xl:text-2xl text-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-right">
                    <MyServicesItem />
                </span>
                {/* </div> */}
            </div>
        </div>
    );
};

// Generate scrolling services list
const generateScrollingServices = (count: number) => {
    const content =
        "Product Manager, Design Project Manager, Design Strategy, UX/UI Consultant, ";
    return new Array(count).fill(content).join("");
};

// const MyServicesItem: React.FC = () => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [offset, setOffset] = useState(0);
//     // Memoize generated services list
//     const content = useMemo(() => generateScrollingServices(1), []);

//     useEffect(() => {
//         let animationFrameId: number;
//         const speed = 1; // Adjust speed for better visibility

//         const scroll = () => {
//             setOffset((prevOffset) => (prevOffset + speed) % (ref.current?.scrollWidth || 1));
//             animationFrameId = requestAnimationFrame(scroll);
//         };

//         animationFrameId = requestAnimationFrame(scroll);

//         return () => cancelAnimationFrame(animationFrameId);
//     }, []);

//     return (
//         <div className="overflow-hidden w-full">
//             <div
//                 ref={ref}
//                 style={{ transform: `translateX(-${offset}px)` }}
//             >
//                 {content}
//             </div>
//         </div>
//     );
// };

const MyServicesItem: React.FC = () => {
    const content = useMemo(() => generateScrollingServices(1), []); // Tăng số lượng nội dung

    return (
        <div className="overflow-hidden w-full">
            <div
                className="scrolling-text"
                onAnimationEnd={(e) => {
                    // Khi animation kết thúc, reset class để chạy lại animation
                    e.currentTarget.style.animation = 'none';
                    e.currentTarget.offsetHeight; // Trigger reflow
                    e.currentTarget.style.animation = '';
                }}
            >
                {content}
            </div>
        </div>
    );
};

export default ServiceItem;
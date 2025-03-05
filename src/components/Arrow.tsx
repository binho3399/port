"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/assets/animations/ArrowAnimations.json";

interface ArrowAnimationProps {
  style?: React.CSSProperties;
}

const ArrowAnimation: React.FC<ArrowAnimationProps> = ({ style }) => {
  const [size, setSize] = useState("80px");

  useEffect(() => {
    if (typeof window === "undefined") return; // Kiểm tra SSR tránh lỗi

    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1536) { // 2xl breakpoint
        setSize("160px");
      } else if (width >= 1280) { // xl breakpoint
        setSize("140px");
      } else if (width >= 1024) { // lg breakpoint
        setSize("100px");
      } else if (width >= 768) { // md breakpoint
        setSize("80px");
      } else {
        setSize("80px");
      }
    };

    updateSize(); // Gọi hàm updateSize() khi component được render
    
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div style={{
        width: size,
        aspectRatio: "1/1",
        ...style
      }}>
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default ArrowAnimation;
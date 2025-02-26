"use client";;

import Lottie from "lottie-react";
import animationData from "../assets/animations/ArrowAnimations.json"; // Import file JSON

import { useState, useEffect } from "react";

const ArrowAnimation = () => {
  const [size, setSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 1440 ? 80 : 200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi 1 lần khi render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} style={{ width: size, height: size }} />
    </div>
  );
};

export default ArrowAnimation;
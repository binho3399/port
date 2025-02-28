// "use client";

// import Lottie from "lottie-react";
// import animationData from "../../public/assets/animations/ArrowAnimations.json"; // Import file JSON

// import { useState, useEffect } from "react";

// const ArrowAnimation = () => {
//   const [size, setSize] = useState(100);

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth < 1440 ? 80 : 200);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Gọi 1 lần khi render

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex justify-center items-center">
//       <Lottie animationData={animationData} loop={true} style={{ width: size, height: size }} />
//     </div>
//   );
// };

// export default ArrowAnimation;

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
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1536) { // 2xl breakpoint
        setSize("200px");
      } else if (width >= 1280) { // xl breakpoint
        setSize("160px");
      } else if (width >= 1024) { // lg breakpoint
        setSize("120px");
      } else if (width >= 768) { // md breakpoint
        setSize("100px");
      } else {
        setSize("80px");
      }
    };

    updateSize();
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
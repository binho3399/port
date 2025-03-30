import Header from "@/components/Header";
import React from "react";
import { educationData } from "./_component/UserEdu";
import Footer from "@/components/Footer";

const HeroSection = () => (
  <div className="container mx-auto flex items-center text-left pb-16">
    {/* Tiêu đề trang */}
    <div className="absolute flex flex-col gap-6 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
      <h5>About</h5>
      <h5>Ho Dac</h5>
      <h5>Quang Binh</h5>
    </div>

    {/* Hình ảnh */}
    <img src="" alt="Me" className="rounded-xl object-cover w-2/3 ml-auto aspect-[4/3] border border-white" />
  </div>
);

const ProfileInfo = () => (
  <div className="container mx-auto ">
    <div className="flex flex-row w-2/3 ml-auto text-left text-white block">
      <div className="flex flex-1 flex-col gap-6">
        Links
        <div>View resume</div>
        <div>Linkedin</div>
        <div>Facebook</div>
      </div>

      {/* Thông tin học vấn */}
      <div className="flex flex-1 flex-col gap-2 text-lg text-gray-500">
        
        Education
        {/* <div className="flex flex-col gap-4"> */}
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-lg text-white">{edu.title}</div>
            <div className="text-sm text-gray-400">{edu.year} | {edu.place}</div>
          </div>
        ))}
        {/* </div> */}
      </div>
      <div className="flex flex-1">Work Experience</div>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ProfileInfo />
    <Footer />
  </div>
);

export default AboutMe;
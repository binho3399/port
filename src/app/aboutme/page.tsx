import Header from "@/components/Header";
import React from "react";
import { educationData, expData } from "../../data/UserData";
import Footer from "@/components/Footer";

const HeroSection = () => (
  <div className="container mx-auto flex items-center text-left pb-16 2xl:pt-20 xl:pt-16 justify-between gap-12">
    {/* Tiêu đề trang */}
    <div className="absolute flex flex-col gap-6 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
      <h5>About</h5>
      <div className="flex flex-row gap-8 items-end">
        <span>Ho Dac</span>
        <span className="text-accent-500 xl:text-8xl animate-spin-slow font-thin mb-2">✺</span>
      </div>
      <h5>Quang Binh</h5>
    </div>

    {/* Hình ảnh cá nhân */}
    {/* <div className="w-1/3"></div> */}
    <img
      src="/path/to/default-image.jpg" // Thay thế bằng đường dẫn hợp lệ
      alt="Me"
      className="rounded-xl object-cover ml-auto w-2/3 aspect-[16/9] border border-white"
    />
  </div>
);

const ProfileInfo = () => (
  <div className="container mx-auto 2xl:pb-20">
    <div className="flex flex-row w-2/3 ml-auto text-left text-gray-500">
      <div className="flex flex-1 flex-col gap-6">
        Links
        <div>View resume</div>
        <div>Linkedin</div>
        <div>Facebook</div>
      </div>

      {/* Thông tin học vấn */}
      <div className="flex flex-1 flex-col gap-4 text-lg text-gray-500">
        Education
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="text-lg text-white">{edu.title}</div>
            <div className="text-sm text-gray-400">{edu.year} | {edu.place}</div>
          </div>
        ))}
      </div>

      {/* Thông tin kinh nghiệm */}
      <div className="flex flex-1 flex-col gap-4 text-lg text-gray-500">
        Work Experience
        {expData.map((exp, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="text-lg text-white">{exp.title}</div>
            <div className="text-sm text-gray-400">{exp.year} | {exp.company}</div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-1">Work Experience</div> */}
    </div>
  </div>
);

const ProfileBio = () => (
  <div className="container mx-auto 2xl:py-20 xl:py-16 ">
    <div className="flex flex-col w-2/3 ml-auto gap-6 text-lg text-left text-white">
      <p className="">
        In UX/UI 4 years, I am currently living in Ho Chi Minh City, I've been working at SuZu Group as a project manager since 2023.

        I'm passionate about creating experiences that are enjoyable and relevant to the needs of product users.
        I combine functionality, aesthetics, and user-centric design to turn ideas into innovative products that achieve business goals.
        During my work time addition to skills related to UX/UI and product design expertise, I also developed team management skills.
        With a passion for innovation and creativity, I am constantly exploring new technologies and sustainable design to stay at the forefront of product design and enhance the user experience with products.
      </p>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ProfileInfo />
    <ProfileBio />
    <Footer />
  </div>
);

export default AboutMe;
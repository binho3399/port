import React from "react";
import Layout from "@/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ArrowAnimation from "@/components/Arrow";
import Article from "@/components/Article";
import { NumberCounter } from "../../components/Metrics";
import Services from "@/components/Services";

const Hero: React.FC = () => (
    <main className="container flex flex-col mx-auto items-center justify-center pt-[64px] 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
        <h1 className="">
            MULTIDISCIPLINARY
        </h1>
        <div className="flex items-center justify-center gap-6">
            <h1 className="">
                PRODUCT
            </h1>
            <Image
                src="/assets/images/ava.png"
                alt="Product Designer"
                width={1024}
                height={1024}
                className="h-[.8em] w-auto object-contain"
                priority
            />
            <h1 className="">
                DESIGNER
            </h1>
        </div>
    </main>
);

const SubContent: React.FC = () => (
    <div className="container flex flex-col mx-auto items-center justify-center text-center pb-[64px]">
        <h5 className="text-5xl text-white whitespace-pre-wrap">
            Meet Binh – a creative designer with a focus on
            <br />
            UX/UI Design, Branding, and Development.
        </h5>
    </div>
);

const ContentDivider: React.FC = () => (
    <div className="container mx-auto flex justify-center items-center py-[64px] w-full border-b-[1px] border-white gap-8">
        <h3 className="text-white xl:text-8xl font-thin">Selected Projects</h3>
        {/* Asterisk google icon */}
        <h3 className="text-accent-500 xl:text-8xl animate-spin-slow">✺</h3>
        <h3 className="text-white opacity-50 xl:text-8xl font-thin">2019 - 2024</h3>
    </div>
);

const CrdArticle: React.FC = () => (
    // Example usage in your page
    <Article
        title="Project Name"
        description="Project description goes here"
        imageUrl="/path/to/image.jpg"
        link="/projects/project-name"
        year="2024"
    />
);

const ListArticles: React.FC = () => (
    <div className="container mx-auto flex flex-col gap-8 py-[64px]">
        <CrdArticle />
        <CrdArticle />
        <CrdArticle />
    </div>
);

const Counter: React.FC = () => (
    <div className="container mx-auto flex flex-row justify-center items-center gap-12 py-[64px]">
        <NumberCounter number={6} symbol="+" label="CLIENTS" />
        <NumberCounter number={10} symbol="+" label="PROJECTS" />
        <NumberCounter number={5} symbol="+" label="YEARS" />
    </div>
);

const MyServices: React.FC = () => (
    <div className="container mx-auto flex flex-col gap-8 py-[64px]">
        <div className="flex flex-row gap-8">
            <h3 className="text-white xl:text-8xl font-bold">What can i do</h3>
            <h3 className="text-white text-opacity-25 xl:text-8xl font-bold">?</h3>
            <h3 className="text-accent-500 xl:text-8xl animate-spin-slow">✺</h3>
        </div>
        <div className="flex flex-col gap-8">
            <Services
                title="Design Consutancy"
                description="Designing user interfaces and user experiences for web and mobile applications."
                href="/services/ui-ux-design"
            />
            <Services
                title="UI/UX Design"
                description="Designing user interfaces and user experiences for web and mobile applications."
                href="/services/ui-ux-design"
            />
            <Services
                title="Branding"
                description="Designing user interfaces and user experiences for web and mobile applications."
                href="/services/ui-ux-design"
            />
            <Services
                title="Development"
                description="Designing user interfaces and user experiences for web and mobile applications."
                href="/services/ui-ux-design"
            />
        </div>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <ArrowAnimation
                style={{
                    maxWidth: '500px',
                    margin: '16px auto'
                }}
            />
            <SubContent />
            <ContentDivider />
            <ListArticles />
            <Counter />
            <MyServices />
            <Footer />
        </div>
    );
};

export default HomePage;
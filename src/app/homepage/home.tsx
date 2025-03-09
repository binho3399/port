import React from "react";
import Layout from "@/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ArrowAnimation from "@/app/homepage/Arrow";
import Article from "@/components/Article";
import { NumberCounter } from "./Metrics";
import MyServices from "@/app/homepage/Services";
import { ContentDivider } from "./ContentDivider";

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
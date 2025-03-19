import React from "react";
import Layout from "@/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowAnimation from "@/app/homepage/_component/Arrow";
import { NumberCounter } from "./_component/Metrics";
import MyServices from "@/app/homepage/_component/Services";
import { ContentDivider } from "./_component/ContentDivider";
import { Hero } from "./_component/Hero";
import ServiceItem from "./_component/ServiceItem";
import { CardArticle } from "./_component/CardArticle";

const SubContent: React.FC = () => (
    <div className="container flex flex-col mx-auto items-center justify-center text-center 2xl:pt-8 2xl:pb-20 pb-16">
        <h5 className="text-5xl text-white whitespace-pre-wrap">
            Meet Binh – a creative designer with a focus on
            <br />
            UX/UI Design, Branding, and Development.
        </h5>
    </div>
);

// const CrdArticle: React.FC = () => (
//     // Example usage in your page
//     <Article
//         title="Project Name"
//         description="Project description goes here"
//         imageUrl="/path/to/image.jpg"
//         link="/projects/project-name"
//         year="2024"
//     />
// );

const ListArticles: React.FC = () => (
    <div className="container mx-auto flex flex-col gap-8">
        <CardArticle
            title="Richters & Hüls"
            description="Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look."
            imageUrl="/assets/images/ava.png"
            href="/images/ava.png"
        />
    </div>
);

const Counter: React.FC = () => (
    <div className="container mx-auto flex flex-row justify-center items-center gap-12 2xl:py-20 py-16">
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
                    // margin: '16px auto'
                }}
            />
            <SubContent />
            <ContentDivider />
            <ListArticles />
            <Counter />
            <MyServices />
            {/* <ServiceItem /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
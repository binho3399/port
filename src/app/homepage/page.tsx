import React from "react";
import Layout from "@/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowAnimation from "@/app/homepage/_component/Arrow";
import { NumberCounter } from "./_component/Metrics";
import MyServices from "@/app/homepage/_component/Services/Services";
import { ContentDivider } from "./_component/ContentDivider";
import { Hero } from "./_component/Hero";
import { ListArticles } from "./_component/Articles/ListArticles";

const SubContent = () => (
    <div className="container flex flex-col mx-auto items-center justify-center text-center 2xl:pt-8 2xl:pb-20 pb-16">
        <h5 className="text-5xl text-white whitespace-pre-wrap">
            Meet Binh – a creative designer with a focus on
            <br />
            UX/UI Design, Branding, and Development.
        </h5>
    </div>
);

const Counter = () => (
    <div className="container mx-auto flex flex-row justify-center items-center gap-12 2xl:py-20 py-16">
        <NumberCounter number={6} symbol="+" label="CLIENTS" />
        <NumberCounter number={10} symbol="+" label="PROJECTS" />
        <NumberCounter number={5} symbol="+" label="YEARS" />
    </div>
);

const HomePage = () => {
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
import React from "react";
import Layout from "@/app/layout"; // Assuming layout.tsx is in src/
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ArrowAnimation from "@/components/Arrow";

// Hero component is the main content of the homepage
const Hero = <main className="container flex flex-col mx-auto items-center justify-center pt-24 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
    <h1>MULTIDISCIPLINARY</h1>
    <div className="flex items-center justify-center gap-6">
        <h1>PRODUCT</h1>
        <Image
            src="/assets/images/ava.png"
            alt="Product Designer"
            width={80}
            height={80}
            className="h-[.8em] w-auto object-contain"
            priority />
        <h1>DESIGNER</h1>
    </div>
</main>;

// ArrowAnimation component is a Lottie animation that shows an arrow pointing down
const ArrowAni = <ArrowAnimation
    style={{
        maxWidth: '500px',
        margin: '20px auto'
    }}
/>

// SubContent component is a section that contains a brief introduction about the designer
const SubContent = <section className="container flex-col mx-auto items-center justify-center text-center text-5xl whitespace-pre-wrap text-white">
    <h5 className="font-[Open Sans]">{`Meet Binh – a creative designer with a focus on\n UX/UI Design, Branding, and Development.`}</h5>
</section>

// ContentDivder is a section that contains a divider
const ContentDivder = <div className="flex justify-center items-center w-full h-[200px] text-white xl:text-8xl font-thin" style={{ backgroundColor: 'grey' }}>
    Selected Projects 2019 - 2024
</div>

const HomePage = () => {
    return (
        <>
            <Header />
            {Hero}
            {ArrowAni}
            {SubContent}
            {ContentDivder}
            {/* <div className="flex justify-center items-center w-full h-[200px]"></div> */}
            <Footer />
        </>
    );
};

export default HomePage;
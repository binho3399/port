import React from "react";
import Layout from "@/app/layout"; // Assuming layout.tsx is in src/
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ArrowAnimation from "@/components/Arrow";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container flex flex-col mx-auto items-center justify-center pt-24 pb-8 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
                <h1 className="">MULTIDISCIPLINARY</h1>
                <div className="container flex items-center justify-center gap-6">
                    <h1 className="">PRODUCT</h1>
                    {/* <img src="../" alt="Product Designer" className="h-[.8em] w-auto" /> */}
                    <img src="/src/assets/images/ava.png" alt="" />

                    {/* Giam chat luong hinh anh */}
                    {/* <Image src="/assets/images/ava.png" alt="Product Designer" height={32} width={32} className="h-[.8em] w-auto" /> */}

                    <h1 className="">DESIGNER</h1>
                </div>
            </div>

            {/* ArrowAnimation component */}
            {/* <div className="flex mx-auto py-8 justify-center items-center">
            </div> */}
            <ArrowAnimation />

            <div className="container flex-col mx-auto  items-center justify-center text-center text-5xl whitespace-pre-wrap text-white">
                <h5 className="font-[Open Sans]">{`Meet Binh – a creative designer with a focus on\n UX/UI Design, Branding, and Development.`}</h5>
            </div>
            {/* Khoang cach giua 2 phan */}
            <div className="flex justify-center items-center w-full h-[200px]"></div>

            <Footer />
        </>
    );
};

export default HomePage;
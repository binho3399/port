import Image from "next/image";
import React from "react";

export const Hero = () => (
    <main className="container flex flex-col mx-auto items-center justify-center 2xl:pt-20 2xl:pb-8 xl:pt-16 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white">
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
                priority />
            <h1 className="">
                DESIGNER
            </h1>
        </div>
    </main>
);

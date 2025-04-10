"use client";
import LinkBTN from './Button/GhostBTN';

const aboutSect =
    <div className="container mx-auto flex justify-between gap-12">
        <div className="container flex flex-col gap-2">
            <span className="text-gray-500" href="/about" >Based in</span>
            <span className="">Ho Chi Minh, Vietnam</span>
        </div>
        <div className="container flex flex-col gap-2">
            <span className="text-gray-500" href="/about">Contact me for work</span>
            <div className="container flex gap-2">
                {/* <span className="container flex">Email </span> */}
                <div className="container flex gap-2">
                    <LinkBTN text="Email" onClick={() => alert('Hello!')} />
                </div>
                <div className="container flex gap-2">
                    <LinkBTN text="Zalo" onClick={() => alert('Hello!')} />
                </div>
            </div>
        </div>
        <div className="container flex flex-col gap-2">
            <span className="text-gray-500" href="/about">Social</span>
            <div className="container flex gap-2 justify-between text-start">
                <div className="container flex gap-2">
                    <LinkBTN text="FB" onClick={() => alert('Hello!')} />
                </div>
                <div className="container flex gap-2">
                    <LinkBTN text="IG" onClick={() => alert('Hello!')} />
                </div>
                <div className="container flex gap-2">
                    <LinkBTN text="IN" onClick={() => alert('Hello!')} />
                </div>
            </div>
        </div>
    </div>;

const fullName = <div className="container flex flex-col mx-auto justify-center 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-black text-white gap-6">
    {/* <hr className=" border-gray-600" /> */}
    <h1 className="text-start">HO DAC</h1>
    <h1 className="text-end">QUANG BINH</h1>
</div>;

const copyRight = <div className="container flex mx-auto justify-between 2xl:text-lg md:text-base text-base text-white">
    <p className="">Copyright © 2024</p>
    <p className="">BinH</p>
</div>;

const Footer = () => {
    return (
        <footer className="text-white px-6 text-lg flex flex-col gap-16 2xl:pt-20 pt-4 2xl:pb-6 pb-4">
            {aboutSect}
            {fullName}
            {copyRight}
        </footer>
    );
}

export default Footer;
"use client";

import GhostBTN from "./GhostBTN";

// Facebook BTN
export const FBBTN = () => {
    const handleClick = () => {
        window.open("https://www.facebook.com/quang.binh.180", "_blank");
    };

    return (
        <GhostBTN
            text="Facebook"
            onClick={handleClick}
        />
    );
}

// Linkedin BTN
export const LinkedInBTN = () => {
    const handleClick = () => {
        window.open("https://www.linkedin.com/in/quang-binh-180/", "_blank");
    };

    return (
        <GhostBTN
            text="LinkedIn"
            onClick={handleClick}
        />
    );
}

// Zalo BTN
export const ZaloBTN = () => {  
    const handleClick = () => {
        window.open("https://zalo.me/180", "_blank");
    };

    return (
        <GhostBTN
            text="Zalo"
            onClick={handleClick}
        />
    );
}
import React from "react";

interface ChipsProps {
    label: string;
}

export const Chips = ({ label }: ChipsProps) => {
    return (
        <span className="px-4 py-4 bg-black rounded-full font-semibold text-gray-300 text-sm overflow-hidden border border-white border-opacity-20">
            {label}
        </span>
    );
};
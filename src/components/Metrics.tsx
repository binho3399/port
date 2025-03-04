import React from "react";

export const Metrics: React.FC<{ number: number; label: string; symbol: string; }> = ({ number, label, symbol }) => (
    <div className="flex flex-1 flex-col items-start justify-start ">
        <h5 className="text-white">{label}</h5>
        <div className="flex flex-row font-bold gap-2">
            <h4 className="text-7xl text-white">{number}</h4>
            <h5 className="text-7xl text-accent-500">{symbol}</h5>
        </div>
    </div>
);

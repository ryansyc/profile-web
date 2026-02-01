"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollBottomButton = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollDown}
            className="bottom-10 absolute p-2 text-slate-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
        >
            <ChevronDown size={32} />
        </button>
    );
};

export default ScrollBottomButton;

"use client";

import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="flex justify-center items-center bg-slate-700 hover:bg-indigo-600 shadow-lg rounded-full w-12 h-12 text-white transition-all duration-300 hover:cursor-pointer"
            aria-label="Back to top"
        >
            <ChevronUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;

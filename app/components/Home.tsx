import React from "react";
import { home } from "@/data/profile.json";
import { Github } from "lucide-react";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-7xl text-center leading-tight">
                {home.name}
            </h1>
            <p className="mt-6 md:mt-8 px-2 max-w-2xl font-mono text-slate-300 text-base sm:text-lg md:text-2xl text-center">
                {home.description}
            </p>
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-5 mt-10 w-full">
                <a href={home.github}>
                    <button className="px-4 sm:px-8 border-none h-10 sm:h-12 min-h-0 text-white text-sm sm:text-base btn-soft btn btn-primary">
                        <Github size={20} />
                        Projects
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import profileData from "@/data/profile.json";
import { Github } from "lucide-react";
import ScrollBottomButton from "./ScrollBottomButton";

const Home = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col justify-center items-center bg-slate-900 px-4 sm:px-12 md:px-20 lg:px-40 min-h-screen overflow-hidden"
        >
            <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-7xl text-center leading-tight">
                {profileData.name}
            </h1>
            <p className="mt-6 md:mt-8 px-2 max-w-2xl font-mono text-slate-300 text-base sm:text-lg md:text-2xl text-center">
                {profileData.description}
            </p>
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-5 mt-10 w-full">
                <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="px-4 sm:px-8 border-none h-10 sm:h-12 min-h-0 text-white text-sm sm:text-base btn btn-primary">
                        <Github size={20} />
                        Github
                    </button>
                </a>
            </div>

            <ScrollBottomButton />
        </section>
    );
};

export default Home;

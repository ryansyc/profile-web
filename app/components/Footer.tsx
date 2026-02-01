import React from "react";
import profileData, { social } from "@/data/profile.json";
import ScrollToTopButton from "./ScrollToTopButton";
import * as LucideIcons from "lucide-react";

const Footer = () => {
    const networks = social.map((network) => {
        const iconName = network.icon as keyof typeof LucideIcons;
        const IconComponent = LucideIcons[iconName] as React.ElementType;

        return (
            <a
                href={network.url}
                key={network.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors duration-300"
            >
                {IconComponent ? (
                    <IconComponent className="w-8 md:w-9 h-8 md:h-9" />
                ) : (
                    <span>{network.name}</span>
                )}
            </a>
        );
    });

    return (
        <footer className="relative bg-slate-800 px-6 py-12 text-slate-400">
            <div className="-top-6 left-1/2 absolute -translate-x-1/2">
                <ScrollToTopButton />
            </div>

            <div className="flex flex-col items-center gap-8 mx-auto max-w-6xl">
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {networks}
                </div>

                <div className="space-y-2 text-center">
                    <p className="text-sm md:text-base">
                        Copyright © 2026 - All right reserved by{" "}
                        {profileData.name}
                    </p>
                    <p className="opacity-50 text-xs uppercase tracking-widest">
                        Design by {profileData.name}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

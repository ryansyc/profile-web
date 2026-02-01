import React from "react";
import { home } from "@/data/profile.json";
import Image from "next/image";

const About = () => {
    return (
        <div
            id="about"
            className="flex md:flex-row flex-col items-center md:items-start gap-12 lg:gap-20 bg-slate-900 px-6 md:px-20 lg:px-40 py-16 md:py-24"
        >
            <div className="shrink-0">
                <div className="avatar">
                    <div className="rounded-2xl ring ring-primary ring-offset-2 ring-offset-base-100 w-32 md:w-48 h-32 md:h-48 overflow-hidden">
                        <Image
                            src={`/images/${home.image}`}
                            alt="Home Image"
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="mb-10">
                    <h2 className="mb-4 font-bold text-white text-3xl">
                        About Me
                    </h2>
                    <p className="text-slate-300 text-lg text-justify leading-relaxed">
                        {home.bio}
                    </p>
                </div>

                <div className="flex md:flex-row flex-col gap-10 md:gap-20">
                    <div className="flex-1">
                        <h3 className="mb-4 font-semibold text-white text-xl">
                            Contact Details
                        </h3>
                        <div className="space-y-1 text-slate-400">
                            <p className="font-medium text-slate-200">
                                {home.name}
                            </p>
                            <p>{home.address.street}</p>
                            <p>
                                {home.address.city}, {home.address.state}{" "}
                                {home.address.zip}
                            </p>
                            <p>{home.phone}</p>
                            <p>{home.email}</p>
                        </div>
                    </div>

                    <div className="flex items-end">
                        <a
                            href={home.resumedownload}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-3 shadow-lg btn btn-primary md:btn-lg"
                        >
                            <i className="fa-solid fa-download"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

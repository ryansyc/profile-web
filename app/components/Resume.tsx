import React from "react";
import profileData from "@/data/profile.json";

const Resume = () => {
    const skillColors = [
        "bg-amber-500",
        "bg-indigo-700",
        "bg-blue-700",
        "bg-blue-800",
        "bg-red-700",
        "bg-green-700",
        "bg-cyan-700",
        "bg-rose-600",
    ];

    return (
        <section
            id="resume"
            className="flex flex-col gap-24 bg-slate-900 px-6 md:px-20 lg:px-40 py-20"
        >
            <div className="flex md:flex-row flex-col gap-8 md:gap-20">
                <div className="md:w-48 shrink-0">
                    <h2 className="inline-block pb-1 border-blue-500 border-b-4 font-bold text-white text-xl uppercase tracking-widest">
                        Education
                    </h2>
                </div>
                <div className="flex flex-col flex-1 gap-10">
                    {profileData.education.map((edu, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-bold text-white text-2xl">
                                {edu.school}
                            </h3>
                            <p className="text-slate-400 italic">
                                {edu.degree} • {edu.graduated}
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                {edu.gpa}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8 md:gap-20">
                <div className="md:w-48 shrink-0">
                    <h2 className="inline-block pb-1 border-blue-500 border-b-4 font-bold text-white text-xl uppercase tracking-widest">
                        Work
                    </h2>
                </div>
                <div className="flex flex-col flex-1 gap-12">
                    {profileData.work.map((work, index) => (
                        <div className="flex flex-col gap-2" key={index}>
                            <h3 className="font-bold text-white text-2xl">
                                {work.company}
                            </h3>
                            <p className="text-slate-400 italic">
                                {work.title} • {work.years}
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8 md:gap-20">
                <div className="md:w-48 shrink-0">
                    <h2 className="inline-block pb-1 border-blue-500 border-b-4 font-bold text-white text-xl uppercase tracking-widest">
                        Skills
                    </h2>
                </div>
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 tracking-wider">
                        {profileData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`${
                                    skillColors[index % skillColors.length]
                                } px-4 py-2 font-bold text-xs uppercase text-white`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;

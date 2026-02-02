import React from "react";
import profileData from "@/data/profile.json";

const Resume = () => {
    return (
        <section
            id="resume"
            className="flex flex-col gap-16 px-6 md:px-20 lg:px-40 py-20"
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
                <div className="flex flex-col flex-1 gap-10">
                    {Object.entries(profileData.skills).map(
                        ([category, items], index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className="font-bold text-white text-2xl capitalize">
                                    {category.replace("_", " ")}
                                </h3>
                                <div className="flex flex-wrap gap-2 tracking-wider">
                                    {items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className={`${skill.color} px-4 py-2 font-bold text-xs uppercase text-white`}
                                        >
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default Resume;

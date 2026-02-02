import React from "react";
import { projects } from "@/data/profile.json";
import Image from "next/image";

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col gap-12 px-6 md:px-20 lg:px-40 py-16 md:py-24"
        >
            <div className="text-center">
                <p className="font-bold text-white text-2xl uppercase tracking-widest">
                    Check out some of my works
                </p>
                <div className="bg-blue-500 mx-auto mt-4 w-20 h-1"></div>
            </div>

            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects.map((project, index) => (
                    <a
                        href={project.url}
                        key={index}
                        className="group bg-slate-800 shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-all hover:-translate-y-2"
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={`/images/${project.image}`}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="mb-1 font-bold text-white text-xl">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">
                                {project.category}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;

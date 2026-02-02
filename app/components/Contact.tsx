import React from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import profileData from "@/data/profile.json";

const Contact = () => {
    return (
        <section id="contact" className="px-6 md:px-20 lg:px-40 py-20">
            <div className="flex lg:flex-row flex-col gap-16 lg:gap-24">
                <div className="flex-1">
                    <div className="mb-10">
                        <h2 className="mb-2 font-bold text-white text-3xl">
                            Get In Touch
                        </h2>
                        <div className="bg-indigo-500 w-16 h-1"></div>
                        <p className="mt-4 text-slate-400">
                            Feel free to reach out for collaborations or just a
                            friendly hello!
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="bg-slate-800 border-slate-700 focus:border-indigo-500 w-full text-white input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="bg-slate-800 border-slate-700 focus:border-indigo-500 w-full text-white input input-bordered"
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="bg-slate-800 border-slate-700 focus:border-indigo-500 w-full text-white input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <textarea
                                className="bg-slate-800 border-slate-700 focus:border-indigo-500 w-full h-40 text-white textarea textarea-bordered"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center bg-indigo-500 hover:bg-indigo-600 shadow-lg px-12 border-none text-white hover:scale-105 transition-transform btn"
                        >
                            <Send className="mr-2 w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/3">
                    <h2 className="mb-10 font-bold text-white text-3xl">
                        Contact Info
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="flex justify-center items-center bg-slate-800 hover:bg-indigo-500 rounded-none w-14 h-14 text-indigo-500 hover:text-white transition-colors shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="mb-1 font-bold text-white text-lg leading-none">
                                    Location
                                </h4>
                                <p className="text-slate-400 text-sm leading-tight">
                                    {profileData.street}, {profileData.city}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex justify-center items-center bg-slate-800 hover:bg-indigo-500 rounded-none w-14 h-14 text-indigo-500 hover:text-white transition-colors shrink-0">
                                <Phone size={24} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="mb-1 font-bold text-white text-lg leading-none">
                                    Phone
                                </h4>
                                <p className="text-slate-400 text-sm leading-tight">
                                    {profileData.phone}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex justify-center items-center bg-slate-800 hover:bg-indigo-500 rounded-none w-14 h-14 text-indigo-500 hover:text-white transition-colors shrink-0">
                                <Mail size={24} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="mb-1 font-bold text-white text-lg leading-none">
                                    Email
                                </h4>
                                <p className="text-slate-400 text-sm leading-tight">
                                    {profileData.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

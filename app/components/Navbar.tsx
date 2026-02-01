"use client";

export default function NavBar() {
    const navItems = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "resume", label: "RESUME" },
        { id: "projects", label: "PROJECTS" },
        { id: "contact", label: "CONTACT" },
    ];

    return (
        <div className="top-0 z-50 fixed flex justify-center bg-transparent pt-4 w-full">
            <ul className="flex flex-row gap-6 md:gap-10">
                {navItems.map((item) => (
                    <li key={item.id} className="list-none">
                        <a
                            href={`#${item.id}`}
                            className="hover:bg-transparent focus:bg-transparent active:bg-transparent p-0 hover:text-primary text-xs md:text-base transition-colors duration-300 cursor-pointer"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

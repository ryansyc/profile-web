import Image from "next/image";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";

export default function Main() {
    return (
        <div>
            <Home />
            <About />
            <Resume />
        </div>
    );
}

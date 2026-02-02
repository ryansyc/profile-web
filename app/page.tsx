import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Main() {
    return (
        <div className="relative">
            <Home />
            <About />
            <Resume />
            {/* <Projects /> */}
            <Contact />
            <Footer />
        </div>
    );
}

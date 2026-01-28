import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <div className="min-h-screen grainy-bg">
            <Navigation />
            <Hero />
            <Marquee />
            <Projects />
            <Skills />
            <Experience />
        </div>
    );
}

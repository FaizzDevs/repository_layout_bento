import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen grainy-bg">
            <Navigation />
            <Hero />
            <Marquee />
            <Projects />
            <Skills />
            <Experience />
            <Journey />
            <Contact />
            <Footer />
        </div>
    );
}

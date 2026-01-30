'use client'

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`sticky top-0 z-50 px-6 py-4 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-sm' : ''}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-2xl font-black tracking-tighter">
                    FZ // <span className="text-white bg-black px-2">DEV</span>
                </div>

                <div className="hidden md:flex gap-8 font-bold uppercase text-sm italic">
                    <button
                        onClick={() => scrollToSection('project')}
                        className="hover:underline decoration-4 underline-offset-4 decoration-neon-green uppercase"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="hover:underline decoration-4 underline-offset-4 decoration-neon-blue uppercase"
                    >
                        Stack
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="hover:underline decoration-4 underline-offset-4 decoration-neon-purple uppercase"
                    >
                        Path
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:underline decoration-4 underline-offset-4 decoration-neon-black uppercase"
                    >
                        Connect
                    </button>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <a 
                    href="#contact"
                    className="bg-neon-green px-6 py-2 border-2 border-black font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all hidden md:block"
                >
                    Hire Me
                </a>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-x-4 border-b-4 border-black shadow-lg">
                    <div className="flex flex-col p-4 space-y-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="font-bold uppercase text-lg py-3 border-b border-gray-200"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="font-bold uppercase text-lg py-3 border-b border-gray-200"
                        >
                            Stack
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="font-bold uppercase text-lg py-3 border-b border-gray-200"
                        >
                            Path
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="font-bold uppercase text-lg py-3"
                        >
                            Connect
                        </button>
                        <a 
                            href="#contact"
                            className="bg-neon-green text-center py-3 border-2 border-black font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
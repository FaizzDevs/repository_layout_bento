'use client'

import { motion } from "framer-motion";
import { Code, ExternalLink, LightbulbIcon, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <header className="max-w-7xl mx-auto px-6 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-black text-white px-4 py-1 mb-6 text-sm font-black italic transform -rotate-2"
                    >
                        AVAILABLE FOR COLLAB Q3 2024
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8"
                    >
                        Fullstack <br /> Wizard // <br /> <span className="bg-neon-purple text-white px-4">Alex Rivers</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl font-medium max-w-2xl leading-tight mb-10 border-l-8 border-black pl-6"
                    >
                        Turning Caffeine into scalable production-ready code, Focused on {' '}
                        <span className="italic underline decoration-4 decoration-neon-blue">Next.js magic</span> and{' '}
                        <span className="italic underline decoration-4 decoration-neon-green">PostgreSQL reliability</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-4"
                    >
                        <a 
                            href="https://github.com/FaizzDevs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutalist-card bg-white text-black px-8 py-4 font-black uppercase text-lg flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            Github <Terminal size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/muhammadfaizalizza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutalist-card bg-white text-black px-8 py-4 font-black uppercase text-lg flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            LinkedIn <ExternalLink size={20} />
                        </a>
                    </motion.div>
                </div>

                <div className="lg:col-span-4 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: 3, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="brutalist-card aspect-square bg-white flex items-center justify-center p-8 transition-transform"
                    >
                        <div className="text-[12rem] text-black">
                            <Code size={200} />
                        </div>
                        <div className="sticker-label">
                            Vibe Check: Passed
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}
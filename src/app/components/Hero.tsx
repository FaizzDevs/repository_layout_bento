'use client'

import { motion } from "framer-motion";
import { Code, ExternalLink, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <header className="max-w-7xl mx-auto px-6 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotate: -6 }}
                        animate={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-black text-white px-4 py-1 mb-6 md:text-sm font-black italic transform -rotate-6 text-xs"
                    >
                        AVAILABLE FOR COLLAB WITH YOU
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-9xl font-black flex flex-col gap-1 tracking-tighter leading-[0.85] uppercase mb-8"
                    >
                        Fullstack <br /> Dev // <br /> <span className="bg-neon-purple py-2 text-white px-4">faizz dev&apos;s</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-2xl font-medium max-w-2xl leading-tight mb-10 border-l-8 border-black pl-6"
                    >
                        Turning coffee into scalable production-ready code, Focused on {' '}
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
                            className="brutalist-card bg-white text-black px-4 py-2 md:px-8 md:py-4 font-black uppercase text-xs md:text-lg flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            Github <Terminal size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/muhammadfaizalizza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutalist-card bg-white text-black px-4 py-2 md:px-8 md:py-4 font-black uppercase text-xs md:text-lg flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            LinkedIn <ExternalLink size={20} />
                        </a>
                    </motion.div>
                </div>

                <div className="lg:col-span-4 hidden group lg:block">
                    <motion.div
                        initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: 3, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="brutalist-card aspect-square bg-white flex items-center justify-center p-8 transition-transform"
                    >
                        <div className="text-[12rem] text-black group-hover:text-neon-green transition-all">
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
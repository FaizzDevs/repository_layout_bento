'use client'

import { ChevronUp, Globe, Mail, Pause, Play, Rss } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(65)
    const [currentTrack, setCurrentTrack] = useState(1)
    const [scrollProgress, setScrollProgress] = useState(0)

    const tracks = [
        { title: 'Lofi Coding Vibes', artist: 'Alex Rivera\'s Playlist' },
        { title: 'Synthwave Dreams', artist: 'Retro Coding Mix' },
        { title: 'Focus Flow', artist: 'Deep Work Beats' },
    ]

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev % tracks.length) + 1)
        setCurrentTime(0)
        setIsPlaying(true)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isPlaying && currentTime < 100) {
            interval = setInterval(() => {
                setCurrentTime((prev) => Math.min(prev + 0.5, 100))
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isPlaying, currentTime])

    return (
        <footer className="border-t-4 border-black py-12 px-6 bg-white relative">
            <div 
                className="absolute top-0 left-0 h-1 bg-neon-green transition-all duration-300"
                style={{ width: `${scrollProgress}%` }} 
            />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="text-2xl font-black uppercase mb-2 italic tracking-tighter">
                        Alex Rivers // 2024
                    </div>

                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">
                        Built with absolute chaos and intent
                    </p>
                </div>

                <div className="glass-widget p-3 flex items-center gap-4 min-w-[300px] hover:translate-y-[-4px] transition-all cursor-pointer group">
                    <div className="relative">
                        <div
                            className={`size-14 bg-black rounded-full flex items-center justify-center overflow-hidden border-2 border-black ${isPlaying ? 'vinyl-spin' : ''}`}
                        >
                            <div
                                className="size-full bg-cover bg-center opacity-80"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop')`,
                                }}
                            />

                            <div className="absolute size-4 bg-white rounded-full border-2 border-black"></div>

                            <div className="absolute -bottom-1 -right-1 bg-black text-neon-green p-0.5 rounded-full border border-white">
                                {isPlaying ? (
                                    <Pause size={10} />
                                ) : (
                                    <Play size={10} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                                Listen with me
                            </span>
                            <div className="flex gap-[2px] items-end h-4 pb-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className={`soundwave-bar bar-${i}${isPlaying ? 'bg-hot-pink' : 'bg-gray-400'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-sm font-black uppercase truncate max-w-[150px]">
                            {tracks[currentTrack - 1].title}
                        </div>
                        <div className="text-xs font-bold text-gray-600 truncate">
                            {tracks[currentTrack - 1].artist}
                        </div>

                        <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-neon-green transition-all duration-300 shadow-[0_0_8px_var(--neon-green)]"
                                style={{ width: `${currentTime}%` }}
                            />
                        </div>

                        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                            <span>
                                0:{Math.floor(currentTime * 0.65).toString().padStart(2, '0')}
                            </span>
                            <span
                                onClick={nextTrack}
                                className="cursor-pointer hover:text-black"
                            >
                                Next →
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="flex gap-6">
                        <a 
                            href="https://github.com/FaizzDevs"
                            target="_blink"
                            rel="noopener noreferrer"
                            className="size-12 border-2 border-black flex items-center justify-center hover:bg-neon-blue transition-colors"
                        >
                            <Globe size={20} />
                        </a>
                        <a 
                            href="mailto:mfaizalizza@gmail.com"
                            className="size-12 border-2 border-black flex items-center justify-center hover:bg-neon-green transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <a 
                            href="#"
                            className="size-12 border-2 border-black flex items-center justify-center hover:bg-neon-purple transition-colors"
                        >
                            <Rss size={20} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="size-12 border-2 border-black flex items-center justify-center hover:translate-y-[-40px] transition-transform bg-white group"
                        >
                            <ChevronUp className="group-hover:-translate-y-1 transition-transform" size={24} />
                        </button>
                    </div>

                    
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
                <p className="font-bold">
                    Built with Next.js 16 • TypeScript • Tailwind CSS v3 • Framer Motion
                </p>
                <p className="mt-2">
                    Inspired by brutalist design • Optimized for performance • Open to collaborations
                </p>
            </div>
        </footer>
    )
}
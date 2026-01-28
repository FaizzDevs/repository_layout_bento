'use client'

import { motion } from "framer-motion"
import { CloudLightningIcon, ExternalLink, Github, Microscope, TrendingUp, Zap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const projetcs = [
    {
        title: 'NeoVault: Digital Assets',
        description: 'A fully decentralized banking interface with real-time analytics and gasless transactions.',
        tags: ['Fintech', 'Web3', 'Blockchain'],
        color: 'bg-black',
        textColor: 'text-white',
        isFeatured: true,
        demoLink: '#',
        githubLink: '#',
    },
    {
        title: 'Pulse CRM',
        description: 'Internal tool for scaling SaaS customer relationships. Next.js + Supabase.',
        tags: ['SaaS', 'CRM', 'Analytics'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        demoLink: '#',
        githubLink: '#',
    },
    {
        title: 'ZenFlow',
        description: 'Productivity app for focused deep-work sessions with Pomodoro and analytics.',
        tags: ['Productivity', 'Pomodoro', 'Analytics'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        demoLink: '#',
        githubLink: '#',
    },
]

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="projetcs" className="max-w-7xl mx-auto px-6 py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-5xl font-black uppercase mb-16 underline decoration-8 decoration-neon-purple underline-offset-8"
            >
                Featured Builds
            </motion.h2>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={ inView ? { opacity: 1, scale: 1 } : {} }
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-2 lg:col-span-2 brutalist-card p-8 flex flex-col justify-between group h-[500px]"
                >
                    <div className="sticker-label">Most Recent</div>
                    <div>
                        <div className="flex gap-2 mb-2">
                            <span className="bg-neon-green text-black px-3 py-1 text-xs font-black uppercase">Fintech</span>
                            <span className="bg-gray-800 text-white px-3 py-1 text-xs font-black uppercase">Web3</span>
                            <span className="bg-gray-800 text-white px-3 py-1 text-xs font-black uppercase">Blockchain</span>
                        </div>

                        <h3 className="text-4xl font-black uppercase mb-4 group-hover:text-neon-green transition-colors">
                            NeoVault: Digital Assets
                        </h3>

                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            A fully decentralized banking interface with real-time analytics and gasless transactions
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-white text-black px-6 py-3 font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_var(--neon-green)] hover:translate-x-1 hover:translate-y-1 transition-transform">
                            View Demo <ExternalLink size={20} />
                        </button>

                        <button className="border-2 border-white px-6 py-3 font-black uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                            Source <Github size={20} />
                        </button>
                    </div>
                </motion.div>

                {projetcs.slice(1).map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={ inView ? { opacity: 1, y: 0 } : {} }
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`brutalist-card p-6 ${project.color} ${project.textColor} flex flex-col justify-between`}
                    >
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">
                                {project.title}
                            </h3>
                            <p className="text-sm font-bold mb-4">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] border border-current px-2 py-0.5 font-bold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a 
                                href={project.demoLink}
                                className="font-black uppercase text-xs flex items-center gap-1 hover:underline"
                            >
                                {index === 0 ? 'View Project' : 'Live Demo'}
                                {index === 0 ? <TrendingUp size={16} /> : <Zap size={16} />}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ inView ? { opacity: 1, y: 0 } : {} }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-2 brutalist-card max-w-7xl mt-8 bg-neon-purple p-8 flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div className="text-white">
                    <h3 className="text-3xl font-black uppercase mb-2">
                        The Lab // R&amp;D
                    </h3>
                    <p className="font-bold opacity-80">
                        Check out my experimental components, shaders, and micro-apps on Github
                    </p>
                </div>

                <div className="flex gap-4 shrink-0">
                    <div className="size-16 bg-white border-2 border-black rotate-12 flex items-center justify-center hover:rotate-0 transition-transform">
                        <div className="text-black text-3xl"><Microscope size={30} /></div>
                    </div>

                    <div className="size-16 bg-white border-2 border-black rotate-12 flex items-center justify-center hover:rotate-0 transition-transform">
                        <div className="text-black"><CloudLightningIcon size={30} /></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
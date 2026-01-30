'use client'

import { motion } from "framer-motion"
import { Bolt, CloudLightningIcon, Code, ExternalLink, Github, Microscope, Terminal, TrendingUp, Zap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const projetcs = [
    {
        id: 1,
        title: 'NeoVault: Asset Ledger',
        description: 'A high-performance digital asset dashboard with real-time gas monitoring and smart-contract auditing.',
        tags: ['Next.js 14', 'Web3', 'Blockchain', 'TypeScript'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: true,
        image: 'url(https://images.unsplash.com/photo-1768486143865-342d8cc12c90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        demoLink: '#',
        githubLink: '#',
        badge: 'V.04 ACTIVE'
    },
    {
        id: 2,
        title: 'Pulse Analytics',
        description: 'Internal CRM with real-time analytics and customer relationship management.',
        tags: ['Supabase', 'Chart.js', 'Next.js', 'PostgreSQL'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1761839257870-06874bda71b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demoLink: '#',
        githubLink: '#',
    },
    {
        id: 3,
        title: 'ZenFlow Productivity',
        description: 'Deep work productivity app with Pomodoro timer and analytics dashboard.',
        tags: ['Node.js', 'Redis', 'WebSockets', 'React'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1768862042479-7ed3f209a5da?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                    className="md:col-span-2 lg:col-span-2 brutalist-card group flex flex-col bg-white"
                >
                    <div className="sticker-label">V.04 ACTIVE</div>

                    <div className="project-image-container h-[300px]">
                        <div 
                            className="w-full h-full bg-center transition-transform duration-700 group-hover:scale-110" 
                            style={{ 
                                backgroundImage: `url(https://images.unsplash.com/photo-1768486143865-342d8cc12c90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` 
                            }}

                        />

                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase border border-neon-green">
                                Next.js 16
                            </span>
                            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase border border-neon-blue">
                                Web3
                            </span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-neon-purple transition-colors">
                                NeoVault: Asset Ledgar
                            </h3>
                            <p className="font-bold text-gray-600 mb-6">
                                A high-performance digital asset dashboard with real-time gas monitoring and smart-contract auditing
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a 
                                href="#"
                                className="bg-black text-white px-4 py-2 flex items-center gap-2 font-black uppercase text-sm border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                <Code size={18} />
                                Repo
                            </a>
                            <a 
                                href="#"
                                className="bg-neon-green text-black px-4 py-2 flex items-center gap-2 font-black uppercase text-sm border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                                
                            >
                                Live
                                <Bolt size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {projetcs.slice(1).map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={ inView ? { opacity: 1, y: 0 } : {} }
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`brutalist-card group flex flex-col bg-white h-full`}
                    >
                        <div className="project-image-container h-[200px] relative overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ 
                                    backgroundImage: `url('${project.image})` 
                                }}
                            />
                        </div>

                        <div className="p-4 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black uppercase mb-2">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-gray-100 text-[10px] border border-black px-2 py-0.5 font-bold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href="#"
                                className="w-fit bg-black text-white px-4 py-2 flex items-center gap-2 font-black uppercase text-sm border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                <Terminal />
                                Github
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ inView ? { opacity: 1, y: 0 } : {} }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-4 brutalist-card p-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-black"
            >
                <div className="text-black">
                    <h3 className="text-4xl font-black uppercase mb-2 flex items-center gap-4">
                        The Experiments // R&amp;D
                    </h3>
                    <p className="font-black italic uppercase text-lg">
                        Exploring Code, Breaking Limits, Shipping Innovation
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
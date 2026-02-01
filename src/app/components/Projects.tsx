'use client'

import { motion } from "framer-motion"
import { CloudLightningIcon, Github, Linkedin, Microscope, Terminal } from "lucide-react"
import { useInView } from "react-intersection-observer"

const projetcs = [
    {
        id: 1,
        title: 'Dashboard Internal',
        description: 'A high-performance digital asset dashboard with real-time gas monitoring and smart-contract auditing.',
        tags: ['Vite React.js', 'Express.js', 'Supabase'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: true,
        image: '',
        demoLink: '#',
        githubLink: '#',
        badge: 'V.04 ACTIVE'
    },
    {
        id: 2,
        title: 'Pulse Analytics',
        description: 'Internal CRM with real-time analytics and customer relationship management.',
        tags: ['React.js', 'API'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        image: '/ss_wedding.png',
        demoLink: '#',
        githubLink: '#',
    },
    {
        id: 3,
        title: 'ZenFlow Productivity',
        description: 'Deep work productivity app with Pomodoro timer and analytics dashboard.',
        tags: ['Next.js', 'MongoDB'],
        color: 'bg-white',
        textColor: 'text-black',
        isFeatured: false,
        image: '/ss_youtube.jfif',
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
        <section id="projetcs" className="max-w-7xl mx-auto px-6 py-12 md:py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-black uppercase mb-16 underline decoration-8 decoration-neon-purple underline-offset-8"
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
                            className="w-full h-full bg-center bg-no-repeat bg-contain md:bg-cover transition-transform duration-700 group-hover:scale-110" 
                            style={{ 
                                backgroundImage: "url('/ss_dashboard.png')" 
                            }}

                        />

                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase border border-neon-green">
                                Vite React.js
                            </span>
                            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase border border-neon-blue">
                                Express.js
                            </span>
                            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase border border-neon-purple">
                                Supabase
                            </span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h3 className="text-xl md:text-3xl font-black uppercase mb-2 group-hover:text-neon-purple transition-colors">
                                Dashboard Internal
                            </h3>
                            <p className="font-bold text-sm md:text-lg text-gray-600 mb-6">
                                Developed an internal company dashboard to analyze operational data on monthly, quarterly, and yearly periods, enabling faster and more data-driven decision-making.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a 
                                href="https://www.linkedin.com/in/muhammadfaizalizza/details/projects/"
                                target="_blank"
                                className="bg-black text-white px-4 py-2 flex items-center gap-2 font-black uppercase text-sm border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                <Linkedin size={18} />
                                Project
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
                                    backgroundImage: `url(${project.image})` 
                                }}
                            />
                        </div>

                        <div className="p-4 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black uppercase mb-2">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.slice(0, 4).map((tag) => (
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
                                href="https://www.linkedin.com/in/muhammadfaizalizza/details/projects/"
                                target="_blank"
                                className="w-fit bg-black text-white px-4 py-2 flex items-center gap-2 font-black uppercase text-sm border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                <Terminal />
                                Project
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
                    <h3 className="text-xl md:text-4xl font-black uppercase mb-2 flex items-center gap-4">
                        The Experiments // R&amp;D
                    </h3>
                    <p className="font-black italic uppercase text-xs md:text-lg">
                        Exploring Code, Breaking Limits, Shipping Innovation
                    </p>
                </div>

                <div className="flex gap-4 shrink-0">
                    <div className="size-16 bg-white border-2 border-black rotate-12 flex items-center justify-center hover:rotate-0 transition-transform">
                        <div className="text-black"><Microscope size={30} /></div>
                    </div>

                    <div className="size-16 bg-white border-2 border-black rotate-12 flex items-center justify-center hover:rotate-0 transition-transform">
                        <div className="text-black"><CloudLightningIcon size={30} /></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
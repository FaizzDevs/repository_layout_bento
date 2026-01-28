'use client'

import { motion } from "framer-motion"
import { Award, CheckCircle, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
    {
        year: '2022 - PRESENT',
        title: 'Senior Fullstack Developer',
        description: 'Leading core infra and feature development for high-growth startups.',
        color: 'text-neon-purple',
        icon: <CheckCircle className="w-5 h-5" />,
        badges: ['Next.js', 'TypeScript', 'AWS'],
    },
    {
        year: '2020 - 2022',
        title: 'Software Engineer',
        description: 'Built scalable APIs and interactive dashboards using React and Node.js.',
        color: 'text-neon-green',
        icon: <Award className="w-5 h-5" />,
        badges: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
        year: '2018 - 2020',
        title: 'B.S. Computer Science',
        description: 'Focused on distributed systems and algorithmic optimization.',
        color: 'text-neon-blue',
        icon: <GraduationCap className="w-5 h-5" />,
        badges: ['Distributed Systems', 'Algorithms', 'Data Structures'],
    },
]

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="experience" className="max-w-4xl mx-auto px-6 py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ inView ? { opacity: 1, y: 0 } : {} }
                transition={{ duration: 0.5 }}
                className="text-5xl font-black uppercase mb-16 text-center italic"
            >
                The Grind
            </motion.h2>

            <div className="relative" ref={ref}>
                <div className="absolute left-1/2 bg-black w-1 h-full -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={ inView ? { opacity: 1, x: 0 } : {} }
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative md:flex md:justify-between items-center group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <div className={`md:w-5/12 brutalist-card p-6 ${index % 2 === 1 ? 'bg-black text-white' : 'glow-soft'}`}>
                                <div className={`${exp.color} font-black text-sm mb-2 flex items-center gap-2`}>
                                    {exp.icon}
                                    {exp.year}
                                </div>

                                <h4 className="text-xl font-black uppercase mb-2">
                                    {exp.title}
                                </h4>

                                <p className={`${index % 2 === 1 ? 'text-gray-400' : 'text-gray-600'} font-bold mb-4`}>
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.badges.map((badge) => (
                                        <span
                                            key={badge}
                                            className={`text-xs px-2 py-1 font-bold ${index % 2 === 1 ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 size-8 bg-black border-4 border-white rotate-45 hidden md:flex items-center justify-center z-10 group-hover:scale-125 transition-transform">
                                <div className="size-2 bg-white"></div>
                            </div>

                            <div className="md:w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
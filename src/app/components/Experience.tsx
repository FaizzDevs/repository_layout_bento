'use client'

import { motion } from "framer-motion"
import { Award, CheckCircle, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
    {
        year: '2025 - PRESENT',
        title: 'M.Sc. Student (Master’s Degree)',
        description: 'Pursuing a Master’s degree while continuing to sharpen software engineering skills and exploring advanced technologies and system architecture.',
        color: 'text-neon-blue',
        icon: <GraduationCap className="w-5 h-5" />,
        badges: ['Advanced Systems', 'Research', 'Software Architecture'],
    },
    {
        year: '2025 - 2026',
        title: 'Dashboard Developer — Impala Network',
        description: 'Developed internal company dashboards, managing both frontend and backend. Built data visualization and admin tools to support business operations.',
        color: 'text-neon-purple',
        icon: <Award className="w-5 h-5" />,
        badges: ['Fullstack', 'Dashboard', 'API', 'Data Visualization'],
    },
    {
        year: '2025',
        title: 'Frontend Developer (Internship)',
        description: 'Worked as a Frontend Developer intern, building responsive UI, integrating APIs, and improving user experience for real-world applications.',
        color: 'text-neon-green',
        icon: <Award className="w-5 h-5" />,
        badges: ['Vue.js', 'Tailwind CSS', 'API Integration'],
    },
    {
        year: '2024 - 2025',
        title: 'Customer Service Call — Shopee',
        description: 'Handled customer inquiries and problem resolution in a fast-paced environment. Developed strong communication, problem-solving, and operational workflow skills.',
        color: 'text-neon-blue',
        icon: <CheckCircle className="w-5 h-5" />,
        badges: ['Communication', 'Problem Solving', 'Customer Support'],
    },
    {
        year: '2020 - 2024',
        title: 'B.Sc. in Informatics',
        description: 'Studied computer science fundamentals, software engineering, and multiple programming languages. Graduated with strong foundations in system design and problem solving.',
        color: 'text-neon-green',
        icon: <GraduationCap className="w-5 h-5" />,
        badges: ['Algorithms', 'OOP', 'Web Development', 'Databases'],
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
                className="text-3xl md:text-5xl font-black uppercase mb-16 text-center italic"
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
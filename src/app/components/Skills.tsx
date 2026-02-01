'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
    {
        title: 'Frontend',
        color: 'text-neon-blue border-neon-blue',
        colorBg: 'hover:bg-neon-blue',
        skills: [
            'React / Next.js',
            'TypeScript',
            'Three.js',
            'Framer Motion',
            'Tailwind CSS',
            'Redux / Zustand',
            'React Query',
            'Vite',
        ],
    },
    {
        title: 'Backend',
        color: 'text-neon-green border-neon-green',
        colorBg: 'hover:bg-neon-green',
        skills: [
            'Node.js',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Prisma / Drizzle',
            'REST APIs',
        ],
    },
    {
        title: 'DevOps & Tools',
        color: 'text-neon-purple border-neon-purple',
        colorBg: 'hover:bg-neon-purple',
            skills: [
            'Docker',
            'Vercel',
            'CI/CD (GitHub Actions)',
            'Linux / Bash',
            'Nginx',
            'Monitoring',
        ],
    },
]

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="skills" className="bg-black text-white py-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={ inView ? { opacity: 1, x: 0 } : {} }
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-black uppercase mb-16 text-right"
                    >
                        The Toolkit
                    </motion.h2>

                    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={ inView ? { opacity: 1, y: 0 } : {} }
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="space-y-8"
                            >
                                <h3 className={` ${category.color} font-black text-2xl uppercase italic tracking-widest border-b-8 border-solid pb-2`}>
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={ inView ? { opacity: 1, scale: 1 } : {} }
                                            transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            className={`px-4 py-2 bg-zinc-900 border border-zinc-700 ${category.colorBg} hover:text-black transition-all font-bold rounded-full cursor-default`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
        </section>
    )
}
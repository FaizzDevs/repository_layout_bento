'use client'

import { motion } from "framer-motion"

const techStack = [
    'React.js',
    'Next.js',
    'Typescript',
    'PostgreSQL',
    'Node.js',
    'TailwindCSS',
    'Docker',
    'Prisma',
    'Three.js',
    'Framer Motion',
]

export default function Marquee() {
    return (
        <div className="marquee-container bg-white py-2 md:py-6 overflow-hidden">
            <div className="marquee-content md:gap-12 text-xl md:text-4xl font-black uppercase italic items-center">
                {[...techStack, ...techStack].map((tech, index) => (
                    <motion.span
                        key={index}
                        className="whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {tech}
                        <span className={`mx-4 ${
                            index % 5 === 0 ? 'text-neon-blue' : 
                            index % 5 === 1 ? 'text-neon-purple' : 
                            index % 5 === 2 ? 'text-neon-green' : 
                            'text-gray-400'
                        }`}>
                            •
                        </span>
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
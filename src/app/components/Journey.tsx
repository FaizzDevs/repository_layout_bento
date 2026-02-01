'use client'

import { Briefcase, Code, Coffee, Rocket } from "lucide-react"
import { useInView } from "react-intersection-observer"

const journeySteps = [
    {
        emoji: '👶',
        title: 'First Line of Code',
        year: '2020',
        description: 'first time touching code when i started college. from zero, learning logic, algorithms, and meeting my first errors. realized that coding is not just typing, it’s a way of thinking.',
        icon: <Code className="w-6 h-6" />,
        label: 'HELLO_WORLD_2020',
        position: 'md:ml-20',
        badgeColor: 'bg-neon-blue',
    },
    {
        emoji: '🤖',
        title: 'Joining UTY Robotics Club',
        year: '2021 – 2024',
        description: 'joined UTY Robotics Club in my second year. started building real systems for robots, sensors, and control. learned teamwork, field debugging, and building systems that must work in the real world.',
        icon: <Code className="w-6 h-6" />,
        label: 'ROBOT_LAB_MODE',
        position: 'md:-ml-20',
        badgeColor: 'bg-neon-purple',
    },
    {
        emoji: '👑',
        title: 'Chairman & Leadership Mode',
        year: '2022 – 2023',
        description: 'trusted as Chairman of UTY Robotics Club. not only coding, but managing teams, roadmaps, and conflicts. learned that leadership is about systems, not just individual skills.',
        icon: <Briefcase className="w-6 h-6" />,
        label: 'LEADER_CORE',
        position: 'md:ml-20',
        badgeColor: 'bg-black',
        cardColor: 'bg-neon-green',
    },
    {
        emoji: '🏁',
        title: 'KRI – KRSRI Division',
        year: '2024',
        description: 'competed in KRI (KRSRI division). experienced national-level pressure. optimized systems, fixed last-minute bugs, and learned that reliability is everything.',
        icon: <Code className="w-6 h-6" />,
        label: 'KRI_KRSRI',
        position: 'md:-ml-20',
        badgeColor: 'bg-neon-blue',
    },
    {
        emoji: '📚',
        title: 'Polyglot Phase',
        year: '2020 – 2024',
        description: 'explored many languages: C++, PHP, Java, JavaScript, C#, and Python. tried different paradigms, until i found my comfort zone in JavaScript and TypeScript.',
        icon: <Coffee className="w-6 h-6" />,
        label: 'LANG_SWITCHER',
        position: 'md:ml-20',
        badgeColor: 'bg-neon-purple',
    },
    {
        emoji: '🎓',
        title: 'Graduate Mode: B.Sc. in Informatics',
        year: 'August 2024',
        description: 'graduated with a Bachelor’s degree in Informatics. not just a title, but an engineer mindset: debug, document, and build for real users.',
        icon: <Briefcase className="w-6 h-6" />,
        label: 'GRADUATED.EXE',
        position: 'md:-ml-20',
        badgeColor: 'bg-neon-green',
    },
    {
        emoji: '🎯',
        title: 'Master’s Journey & Scaling Up',
        year: '2025 – NOW',
        description: 'started my Master’s degree while continuously sharpening my skills. exploring new technologies, modern architectures, and additional programming languages. focused on building scalable, maintainable, production-grade systems.',
        icon: <Code className="w-6 h-6" />,
        label: 'NEXT_LEVEL_DEV',
        position: 'md:-ml-20',
        badgeColor: 'bg-neon-blue',
    },
    {
        emoji: '💼',
        title: 'Real Industry Experience',
        year: '2024 – 2026',
        description: 'interned as a Frontend Developer, worked at Shopee as a Customer Service Call agent, and at Impala Network as a Dashboard Developer. handled full frontend and backend for a company dashboard.',
        icon: <Briefcase className="w-6 h-6" />,
        label: 'INDUSTRY_READY',
        position: 'md:ml-20',
        badgeColor: 'bg-black',
    },
]

export default function Journey() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden" id="journey">
            <div 
                className="absolute top-20 right-10 p-4 bg-white border-2 border-black -rotate-12 text-xs font-black shadow-[4px_4px_0_black] z-0 opacity-20 md:opacity-100"
            >
                <code>console.log(&quot;hello world&quot;);</code>
            </div>

            <div 
                className="absolute bottom-40 left-10 p-4 bg-black text-white border-2 border-neon-blue rotate-6 text-xs font-black z-0 opacity-20 md:opacity-100"
            >
                <code>npm install success --force</code>
            </div>

            <div 
                className="absolute top-1/2 left-20 p-2 bg-neon-green border-2 border-black -rotate-6 text-2xl z-0 opacity-20 md:opacity-100"
            >
                <Rocket />
            </div>

            <h2
                className="text-3xl md:text-5xl font-black uppercase mb-24 text-center"
            >
                My Coding Journey
            </h2>

            <div ref={ref} className="relative flex flex-col items-center">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 wavy-dashed-line opacity-30 pointer-events-none z-0"></div>

                {journeySteps.map((step, index) => (
                    <div
                        key={step.title}
                        className={`relative w-full max-w-lg mb-32 z-10 group ${step.position}`}
                    >
                        <div className={`brutalist-card p-8 bg-white hover:scale-105 transition-transform`}>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-4xl">
                                    {step.emoji}
                                </span>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                                        {step.title}
                                    </h3>
                                    <span className={`text-xs font-black ${step.badgeColor} text-white px-2 py-0.5 mt-1 inline-block`}>
                                        {step.year}
                                    </span>
                                </div>

                                <div className="ml-auto">
                                    {step.icon}
                                </div>
                            </div>

                            <p className="typewriter-font text-sm md:text-lg leading-relaxed">
                                {step.description}
                            </p>

                            <div className={`absolute top-4 -right-1 ${step.badgeColor} text-white  font-black px-3 py-1 text-[10px] border-2 border-black rotate-12`}>
                                {step.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
'use client'

import { motion } from "framer-motion"
import { Briefcase, Code, Coffee, Rocket } from "lucide-react"
import { useInView } from "react-intersection-observer"

const journeySteps = [
    {
        emoji: '🐣',
        title: 'The First Hello World',
        year: 'EST. 2016',
        description: 'it started in a dusty library. saw a green terminal window and thought i was in the matrix. typed my first print statement and felt like a literal god. never looked back.',
        icon: <Code className="w-6 h-6" />,
        label: 'ORIGIN_STORY.EXE',
        position: 'md:ml-20',
        badgeColor: 'bg-neon-blue',
    },
    {
        emoji: '☕',
        title: 'The Bootcamp Grind',
        year: 'WINTER 2018',
        description: '12 hours of coding. 4 hours of sleep. infinite cups of coffee. learned that "it works on my machine" is a lie we tell ourselves to cope with the pain.',
        icon: <Coffee className="w-6 h-6" />,
        label: 'LEVELING_UP_V3',
        position: 'md:-ml-20',
        badgeColor: 'bg-neon-purple',
    },
    {
        emoji: '👔',
        title: 'Landing My First Gig',
        year: 'SUMMER 2020',
        description: 'imposter syndrome hit hard. pushed my first production bug on day 3. fixed it in 10 mins. realized even seniors are just googling things. let\'s go.',
        icon: <Briefcase className="w-6 h-6" />,
        label: 'HIRED_AF',
        position: 'md:ml-20',
        badgeColor: 'bg-black',
        cardColor: 'bg-neon-green',
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
                className="text-5xl font-black uppercase mb-24 text-center"
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
                                    <h3 className="text-2xl font-black uppercase tracking-tight">
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

                            <p className="typewriter-font text-lg leading-relaxed">
                                &gt: {step.description}
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
'use client'

import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, Terminal } from "lucide-react"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) throw new Error('Failed to send')

            setIsSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
        } catch {
            alert('Failed to send message. Please try again')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto">
                <h2
                    className="text-6xl font-black uppercase tracking-tighter leading-none mb-12 text-center"
                >
                    Get In Touch
                </h2>

                <div className="terminal-font bg-[#0c0c0c] border-4 border-black rounded-lg shadow-[12px_12px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-black">
                        <div className="flex gap-2">
                            <div className="size-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="size-3 rounded-full bg-[#27c93f]"></div>
                        </div>

                        <div className="text-gray-400 text-xs mx-auto flex items-center gap-2">
                            <Terminal size={12} />
                            zsh - contact.sh
                        </div>
                    </div>

                    <div className="p-6 text-[#f0f0f0] space-y-4">
                        <div className="flex gap-2">
                            <span className="text-neon-green">
                                user@portfolio:~$
                            </span>
                            <span>
                                contact --init
                            </span>
                        </div>

                        <div className="space-y-1">
                            <p className="text-blue-400">
                                Initializing communication channel...
                            </p>
                            {isSubmitted ? (
                                <p className="text-neon-green">
                                    Message send successfully!
                                </p>
                            ): (
                                <p className="text-neon-green">
                                    Success!
                                </p>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 pt-4" >
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <label className="shrink-0 text-[#888] w-20">
                                    Name:
                                </label>
                                <div className="flex-1 flex items-center rounded px-3 py-2">
                                    <span className="text-neon-green mr-2">[input]</span>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="terminal-input bg-transparent flex-1"
                                        placeholder="your_name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <label className="shrink-0 text-[#888] w-20">
                                    Email:
                                </label>
                                <div className="flex-1 flex items-center rounded px-3 py-2">
                                    <span className="text-neon-blue mr-2">
                                        [input]
                                    </span>
                                    <input 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="terminal-input bg-transparent flex-1 text-white"
                                        placeholder="email@address.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="shrink-0 text-[#888]">
                                    Message:
                                </label>
                                <div className="flex items-start rounded px-3 py-2">
                                    <span className="text-neon-purple mr-2 mt-1">
                                        [input]
                                    </span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="terminal-input bg-transparent flex-1 min-h-[100px] resize-none"
                                        placeholder="write your brief here..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-6 flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-neon-green text-black px-6 py-2 font-bold uppercase hover:bg-white transition-colors flex items-center gap-2 ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Execure --send'}
                                    <Send size={16} />
                                </button>

                                <div className="flex items-center">
                                    <span className="text-[#cf0] mr-1">
                                        _
                                    </span>

                                    <div className="w-2.5 h-5 bg-[#cf0] cursor-blink"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-center gap-12 font-black italic">
                    <div className="flex items-center gap-3">
                        <Mail className="text-neon-purple" />
                        <span>
                            mfaizalizza@gmail.com
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MessageSquare className="text-neon-blue" />
                        <span>
                            @faizalizza_
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
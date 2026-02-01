import { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Courier_Prime, Caveat } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk'
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono'
})

const courierPrime = Courier_Prime({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-courier-prime'
})

const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat'
})

export const metadata: Metadata = {
    title: "Faizz Dev's Portfolio",
    description: 'Turning coffee into scalable production-ready code'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${courierPrime.variable} ${caveat.variable}`}>
            <body className="font-space-grotesk bg-brutalist-white text-brutalist-black cursor-crosshair">
                {children}
            </body>
        </html>
    )
}
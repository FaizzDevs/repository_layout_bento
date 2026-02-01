import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'faizzdevs@gmail.com',
            subject: `New Contact from ${name}`,
            replyTo: email,
            html:`<h2>New Contact Message</h2>
                    <p><b>Name:</b> ${name}</p>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Message:</b></p>
                    <p>${message}</p>`
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
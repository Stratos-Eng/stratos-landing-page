import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory storage for demo purposes
const waitlistEmails: { email: string; timestamp: string }[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required and must be a string" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check for duplicates
    const normalizedEmail = email.toLowerCase().trim()
    const existingEmail = waitlistEmails.find((entry) => entry.email.toLowerCase() === normalizedEmail)

    if (existingEmail) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 })
    }

    // Add to waitlist
    const newEntry = {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    }
    waitlistEmails.push(newEntry)

    // Send notification email (optional - won't fail if Resend fails)
    try {
      await resend.emails.send({
        from: "Stratos Waitlist <onboarding@resend.dev>",
        to: ["hamza.surti1@gmail.com"], // Replace with your actual email
        subject: "New Stratos Waitlist Signup",
        html: `
          <h2>New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Total Signups:</strong> ${waitlistEmails.length}</p>
        `,
      })
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      message: "Successfully added to waitlist",
      count: waitlistEmails.length,
    })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    emails: waitlistEmails,
    count: waitlistEmails.length,
  })
}

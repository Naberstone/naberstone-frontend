import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // For now, log the inquiry. Replace with email service (SendGrid, Resend, etc.)
    console.log("Enterprise inquiry received:", {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification via SendGrid/Resend/etc.
    // await sendEmail({ to: "sales@naberstone.com", subject: `Enterprise Inquiry from ${name}`, ... })

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

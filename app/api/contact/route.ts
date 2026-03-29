import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { engagementType, name, email, organization, role, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const engagementLabels: Record<string, string> = {
      overview: "Request Technical Overview",
      call: "Schedule Strategic Safety Architecture Call",
      integration: "Request Integration Discussion",
    };

    const engagementLabel =
      engagementLabels[engagementType] || engagementType || "Not specified";

    const resend = getResend();
    await resend.emails.send({
      from: "Naberstone Contact Form <noreply@naberstone.com>",
      to: "support@naberstone.com",
      subject: `New Inquiry: ${engagementLabel} — ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top; width: 140px;">Engagement Type</td>
            <td style="padding: 8px 12px;">${engagementLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Organization</td>
            <td style="padding: 8px 12px;">${organization || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Role</td>
            <td style="padding: 8px 12px;">${role || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px;">${message ? message.replace(/\n/g, "<br>") : "No message provided"}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; color: #888; font-size: 12px;">
          Submitted at ${new Date().toISOString()}
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

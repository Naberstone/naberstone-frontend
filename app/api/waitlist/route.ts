import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from("waitlist_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        product: "RFIS-X1",
      });

    if (dbError) {
      console.error("Supabase waitlist insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (non-blocking — don't fail the request if email fails)
    try {
      await resend.emails.send({
        from: "RFIS-X1 Waitlist <waitlist@naberstone.com>",
        to: "support@naberstone.com",
        subject: `New RFIS-X1 Waitlist Signup: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #E6BA18; margin-bottom: 20px;">New Waitlist Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Product</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">RFIS-X1</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Time</td>
                <td style="padding: 10px;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</td>
              </tr>
            </table>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">This is an automated notification from the RFIS-X1 waitlist form.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend email notification error:", emailError);
      // Don't fail the request — the DB insert succeeded
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

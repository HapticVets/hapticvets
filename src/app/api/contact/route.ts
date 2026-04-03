import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, interest, veteran, message } = body;

    if (!name || !email || !interest || !veteran || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "HNVO Contact <contact@updates.hapticvets.com>",
      to: ["jreese@hapticvets.com"],
      replyTo: email,
      subject: `HNVO Lead: ${interest} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New HNVO Contact Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Veteran:</strong> ${veteran}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    console.log("Resend result:", JSON.stringify(result, null, 2));

    if (result.error) {
      console.error("Resend send error:", result.error);
      return NextResponse.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: result.data?.id ?? null,
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Server error while sending email." },
      { status: 500 }
    );
  }
}
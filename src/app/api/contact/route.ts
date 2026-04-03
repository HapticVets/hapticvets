import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, interest, veteran, message } = body;

    await resend.emails.send({
      from: "HNVO Contact <contact@updates.hapticvets.com>",
      to: ["jreese@hapticnation.com"], // your email
      subject: `New Lead: ${interest}`,
      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Veteran:</strong> ${veteran}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
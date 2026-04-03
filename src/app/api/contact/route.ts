import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "HNVO Contact <contact@updates.hapticvets.com>",
      to: ["jreese@hapticvets.com"],
      replyTo: email,
      subject: `HNVO Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New HNVO Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (result.error) {
      return Response.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data: result.data });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong while sending the form." },
      { status: 500 }
    );
  }
}
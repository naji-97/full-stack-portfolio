import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: NextRequest) {
  const { firstname, lastname, email,phone, service, message,  } = await request.json();

  // Create a transporter using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Portfolio Contact: ${service}`,
    text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
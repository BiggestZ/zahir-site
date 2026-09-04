"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUBJECT_MAX_LENGTH = 100;

const SPAM_PATTERN =
  /\b(seo|backlinks?|domain authority|rank(ing)? on google|page 1|guest post|web design services|increase your traffic)\b/i;

const SUCCESS_STATE: ContactState = {
  status: "success",
  message: "Message sent! I'll be in touch soon.",
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypotWebsite = (formData.get("website") as string)?.trim();
  const honeypotCompany = (formData.get("company") as string)?.trim();
  if (honeypotWebsite || honeypotCompany) {
    return SUCCESS_STATE;
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (SPAM_PATTERN.test(`${subject} ${message}`)) {
    return SUCCESS_STATE;
  }

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (subject.length > SUBJECT_MAX_LENGTH) {
    return { status: "error", message: `Subject must be ${SUBJECT_MAX_LENGTH} characters or fewer.` };
  }

  if (/[\r\n]/.test(subject)) {
    return { status: "error", message: "Subject cannot contain line breaks." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[${subject}] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return SUCCESS_STATE;
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}

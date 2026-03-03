"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="contact-success">
        <span className="contact-success-icon">✓</span>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="contact-form">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
            disabled={pending}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@example.com"
            disabled={pending}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input form-textarea"
          placeholder="What's on your mind?"
          disabled={pending}
        />
      </div>

      {state.status === "error" && (
        <p className="form-error">{state.message}</p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

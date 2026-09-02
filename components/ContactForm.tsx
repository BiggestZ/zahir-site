"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const initialState: ContactState = { status: "idle", message: "" };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateRequired(label: string) {
  return (value: unknown) =>
    String(value ?? "").trim() ? null : `${label} is required.`;
}

function validateEmail(value: unknown) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) return "Email is required.";
  if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
  return null;
}

function validateSubject(value: unknown) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) return "Subject is required.";
  if (trimmed.length > 100) return "Subject must be 100 characters or fewer.";
  return null;
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const lastStatus = useRef(state.status);

  useEffect(() => {
    if (state.status === lastStatus.current) return;
    lastStatus.current = state.status;

    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Form ref={formRef} action={action} validationMode="onBlur" className="contact-form">
      <div className="form-row">
        <FormField name="name" validate={validateRequired("Name")}>
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
            disabled={pending}
          />
          <FormMessage />
        </FormField>

        <FormField name="email" validate={validateEmail}>
          <FormLabel>Email</FormLabel>
          <FormControl
            type="text"
            inputMode="email"
            autoComplete="email"
            className="form-input"
            placeholder="you@example.com"
            disabled={pending}
          />
          <FormMessage />
        </FormField>
      </div>

      <FormField name="subject" validate={validateSubject}>
        <FormLabel>Subject</FormLabel>
        <FormControl
          type="text"
          maxLength={100}
          autoComplete="off"
          className="form-input"
          placeholder="What's this about?"
          disabled={pending}
        />
        <FormMessage />
      </FormField>

      <FormField name="message" validate={validateRequired("Message")}>
        <FormLabel>Message</FormLabel>
        <FormControl
          render={<textarea rows={5} />}
          className="form-input form-textarea"
          placeholder="What's on your mind?"
          disabled={pending}
        />
        <FormMessage />
      </FormField>

      <button type="submit" className="btn btn-primary form-submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
    </Form>
  );
}

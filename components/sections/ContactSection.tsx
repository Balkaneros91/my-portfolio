"use client";

import Section from "@/components/layout/Section";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

type Status = "idle" | "sending" | "success" | "error";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast]);

  function validateForm(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors: Errors = {};

    if (name.length > 0 && name.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Message cannot be empty.";
    } else if (message.length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return {
      isValid: Object.keys(nextErrors).length === 0,
      nextErrors,
      values: { name, email, message },
    };
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { isValid, nextErrors, values } = validateForm(formData);

    if (!isValid) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
      setToast({ message: "Message sent successfully.", type: "success" });
    } catch {
      setStatus("error");
      setToast({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setTimeout(() => {
        setStatus("idle");
      }, 500);
    }
  }

  return (
    <Section id="contact" className="bg-background">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            I&apos;m currently open to junior full-stack or frontend
            opportunities. Feel free to reach out or connect with me.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary ${
                  errors.name ? "border-red-500" : "border-border"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your_email@example.com"
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary ${
                  errors.email ? "border-red-500" : "border-border"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me a little about your question or opportunity..."
              className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary ${
                errors.message ? "border-red-500" : "border-border"
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:andelic.antonio.claudio91@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-primary"
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                icon="solar:letter-bold-duotone"
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <span className="relative">
                or email me directly
                <span className="absolute left-0 top-full mt-0.5 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-200 group-hover:scale-x-110" />
              </span>
            </a>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>

      {toast && (
        <div
          className={`fixed right-4 top-20 z-50 rounded-xl border px-4 py-3 text-sm shadow-lg backdrop-blur-sm ${
            toast.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-600"
              : "border-red-500/30 bg-red-500/10 text-red-500"
          }`}>
          {toast.message}
        </div>
      )}
    </Section>
  );
}

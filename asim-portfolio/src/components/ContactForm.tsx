import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ContactFormValues, FieldErrors, SubmitStatus } from "@/types";

const EMPTY_VALUES: ContactFormValues = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }

  if (!values.message.trim()) {
    errors.message = "Add a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Say a little more — at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(field: keyof ContactFormValues, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched[field]) {
      setErrors(validate(nextValues));
    }
  }

  function handleBlur(field: keyof ContactFormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Wire this up to a real endpoint (e.g. Formspree, a serverless
      // function, or your own API route) — this simulates the round trip.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(EMPTY_VALUES);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface px-8 py-16 text-center"
        role="status"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pulse/15"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="#5EE6B0"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <h3 className="mb-2 text-display-md font-display font-semibold text-ivory">Message sent</h3>
        <p className="max-w-sm text-ivory-muted">
          Thanks for reaching out — I'll get back to you at the email you left within a couple of days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-signal underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field
        label="Name"
        name="name"
        value={values.name}
        error={touched.name ? errors.name : undefined}
        onChange={(value) => handleChange("name", value)}
        onBlur={() => handleBlur("name")}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={touched.email ? errors.email : undefined}
        onChange={(value) => handleChange("email", value)}
        onBlur={() => handleBlur("email")}
        autoComplete="email"
      />
      <Field
        label="Message"
        name="message"
        as="textarea"
        value={values.message}
        error={touched.message ? errors.message : undefined}
        onChange={(value) => handleChange("message", value)}
        onBlur={() => handleBlur("message")}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-signal px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal">
          Something went wrong sending that — please try again, or email hello@asimsaeed.dev directly.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  name: keyof ContactFormValues;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  as?: "input" | "textarea";
  type?: string;
  autoComplete?: string;
}

function Field({ label, name, value, error, onChange, onBlur, as = "input", type = "text", autoComplete }: FieldProps) {
  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;
  const sharedClassName = `w-full rounded-xl border bg-surface px-4 py-3 text-ivory placeholder:text-ivory-faint focus:outline-none transition-colors ${
    error ? "border-signal" : "border-line focus:border-ivory-faint"
  }`;

  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block text-sm text-ivory-muted">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          rows={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${sharedClassName} resize-none`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={sharedClassName}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-signal"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

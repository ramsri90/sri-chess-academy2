"use client";

import { useState, type FormEvent } from "react";

interface FieldState {
  value: string;
  error: string;
}

interface FormState {
  firstName: FieldState;
  lastName: FieldState;
  email: FieldState;
  phone: FieldState;
  message: FieldState;
}

const INITIAL: FormState = {
  firstName: { value: "", error: "" },
  lastName: { value: "", error: "" },
  email: { value: "", error: "" },
  phone: { value: "", error: "" },
  message: { value: "", error: "" },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    let valid = true;
    const next = { ...form };

    if (!next.firstName.value.trim()) {
      next.firstName.error = "First name is required";
      valid = false;
    } else {
      next.firstName.error = "";
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!next.email.value.trim()) {
      next.email.error = "Email is required";
      valid = false;
    } else if (!emailReg.test(next.email.value.trim())) {
      next.email.error = "Please enter a valid email";
      valid = false;
    } else {
      next.email.error = "";
    }

    if (!next.phone.value.trim()) {
      next.phone.error = "Phone number is required";
      valid = false;
    } else if (!/^[\d\s+\-()]{7,15}$/.test(next.phone.value.trim())) {
      next.phone.error = "Please enter a valid phone number";
      valid = false;
    } else {
      next.phone.error = "";
    }

    next.message.error = "";
    setForm(next);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: { ...prev[field], value, error: "" } }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-secondary mb-2">Message Sent!</h3>
        <p className="text-text-body text-sm">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const fields: { key: keyof FormState; label: string; type: string; placeholder: string; required: boolean }[] = [
    { key: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", required: true },
    { key: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", required: false },
    { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
    { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 md:p-10 space-y-5">
      <h3 className="text-2xl font-bold text-text-secondary mb-2">Send Us a Message</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.key} className={f.key === "email" || f.key === "phone" ? "sm:col-span-2" : ""}>
            <label className="form-label">
              {f.label}
              {f.required && <span className="required">*</span>}
            </label>
            <input
              type={f.type}
              value={form[f.key].value}
              onChange={(e) => update(f.key, e.target.value)}
              placeholder={f.placeholder}
              className={`form-input ${form[f.key].error ? "error" : ""}`}
            />
            {form[f.key].error && <p className="error-text">{form[f.key].error}</p>}
          </div>
        ))}
      </div>

      <div>
        <label className="form-label">Comments / Questions</label>
        <textarea
          rows={5}
          value={form.message.value}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Enter your message"
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent-purple hover:bg-accent-dark text-white font-semibold py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/30"
      >
        Send Message
      </button>
    </form>
  );
}

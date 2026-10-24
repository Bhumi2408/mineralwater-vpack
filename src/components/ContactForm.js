
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("access_key", "3ee52431-d1d4-4737-80f2-7213b17bfddc");
    data.append("subject", "New Enquiry - VPack Landing Page");
    data.append("from_name", "VPack Landing Page");

    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field half">
        <label htmlFor="user_name" className="field-label">
          Name*
        </label>
        <input
          type="text"
          name="name"
          id="user_name"
          placeholder="Your Name"
          className="field-input"
          autoComplete="name"
          required
        />
      </div>

      <div className="field half">
        <label htmlFor="user_email" className="field-label">
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="user_email"
          placeholder="example@email.com"
          className="field-input"
          autoComplete="email"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="user_contact" className="field-label">
          Contact Number*
        </label>
        <input
          type="tel"
          name="contact"
          id="user_contact"
          placeholder="Your Contact Number"
          className="field-input"
          autoComplete="tel"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="user_message" className="field-label">
          Your Message*
        </label>
        <textarea
          name="message"
          id="user_message"
          rows={5}
          placeholder="Your Message Here"
          className="field-input"
          required
        />
      </div>

      <div className="form-submit">
        <button
          type="submit"
          className="btn-submit"
          disabled={status === "sending"}
        >
          <span>
            {status === "sending" ? "Sending..." : "Send Message"}
          </span>
        </button>
      </div>

      {status === "success" && (
        <p className="form-status" role="status">
          Thank you! Your enquiry has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="form-status" role="alert">
          Unable to send your message. Please try again.
        </p>
      )}
    </form>
  );
}

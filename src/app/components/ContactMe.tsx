"use client";

import { FormEvent, useState } from "react";
import { contactDetails, contactSectionId } from "@/utils/constants";
import { services } from "./Services";
import shared from "./shared.module.css";
import classes from "./ContactMe.module.css";

type Values = {
  name: string;
  email: string;
  date: string;
  service: string;
  location: string;
  message: string;
};

const emptyValues: Values = {
  name: "",
  email: "",
  date: "",
  service: services[0].name,
  location: "",
  message: "",
};

function validate(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Please enter a valid email";
  if (values.message.trim().length < 10)
    errors.message = "Tell me a little more about your day";
  return errors;
}

// Until a form-sending service is set up, submitting opens the visitor's
// email app with the enquiry written out, addressed to Daniella.
function buildMailto(values: Values) {
  const subject = `${values.service} enquiry from ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    values.date ? `Event date: ${values.date}` : null,
    values.location ? `Location: ${values.location}` : null,
    "",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

function ContactMe() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [sent, setSent] = useState(false);

  const field = (name: keyof Values) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setValues((v) => ({ ...v, [name]: e.target.value })),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: classes.input,
  });

  const errorFor = (name: keyof Values) =>
    errors[name] && (
      <span id={`contact-${name}-error`} className={classes.error}>
        {errors[name]}
      </span>
    );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    window.location.href = buildMailto(values);
    setSent(true);
  };

  return (
    <section id={contactSectionId} className={`${shared.container} ${classes.section}`}>
      <div className={classes.intro}>
        <p className={shared.eyebrow}>Contact</p>
        <h2 className={shared.sectionTitle}>Let&apos;s plan your look</h2>
        <p className={classes.lede}>
          Tell me a little about your day and I&apos;ll get back to you with
          availability and a quote.
        </p>
        <ul className={classes.details}>
          <li>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </li>
          <li>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
              {contactDetails.phone}
            </a>
          </li>
          <li className={classes.muted}>{contactDetails.area}</li>
        </ul>
      </div>

      <form className={classes.form} onSubmit={onSubmit} noValidate>
        <label className={classes.field} htmlFor="contact-name">
          Full name
          <input type="text" autoComplete="name" {...field("name")} />
          {errorFor("name")}
        </label>
        <label className={classes.field} htmlFor="contact-email">
          Email
          <input type="email" autoComplete="email" {...field("email")} />
          {errorFor("email")}
        </label>
        <label className={classes.field} htmlFor="contact-date">
          Event date
          <input type="date" {...field("date")} />
        </label>
        <label className={classes.field} htmlFor="contact-service">
          Service
          <select {...field("service")}>
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
        </label>
        <label
          className={`${classes.field} ${classes.fullWidth}`}
          htmlFor="contact-location"
        >
          Location
          <input type="text" autoComplete="address-level2" {...field("location")} />
        </label>
        <label
          className={`${classes.field} ${classes.fullWidth}`}
          htmlFor="contact-message"
        >
          Tell me about your day
          <textarea rows={4} {...field("message")} />
          {errorFor("message")}
        </label>
        <div className={classes.submitRow}>
          <button type="submit" className={`${shared.buttonPrimary} ${classes.submit}`}>
            Send enquiry
          </button>
          {sent && (
            <p className={classes.note} role="status">
              Your email app should open with your enquiry ready to send.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

export default ContactMe;

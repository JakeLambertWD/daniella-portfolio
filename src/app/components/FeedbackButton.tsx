"use client";

import { FormEvent, useState } from "react";
import { Modal } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { feedbackTypes, type FeedbackType } from "@/sanity/feedbackOptions";
import shared from "./shared.module.css";
import classes from "./FeedbackButton.module.css";

const kindHints: Record<FeedbackType, string> = {
  Bug: "Something is broken or looks wrong",
  Improvement: "An idea or change you'd like",
};

type Status = "idle" | "sending" | "sent" | "error";

function FeedbackButton() {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const [kind, setKind] = useState<FeedbackType>("Bug");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Shown on the homepage only (not in Sanity Studio)
  if (pathname !== "/") return null;

  const reset = () => {
    setKind("Bug");
    setTitle("");
    setDetails("");
    setStatus("idle");
    setError("");
  };

  const close = () => {
    setOpened(false);
    if (status === "sent") reset();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError("Please add a short title");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          title,
          details,
          page: window.location.href,
          device: `${window.innerWidth}×${window.innerHeight} · ${navigator.userAgent}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong, please try again"
      );
    }
  };

  return (
    <>
      <button type="button" className={classes.fab} onClick={() => setOpened(true)}>
        <IconMessageCircle size={20} stroke={1.5} aria-hidden="true" />
        Feedback
      </button>

      <Modal
        opened={opened}
        onClose={close}
        centered
        radius={0}
        size="lg"
        title={<span className={classes.title}>Send feedback</span>}
        overlayProps={{ backgroundOpacity: 0.45, color: "#2E2220", blur: 2 }}
        styles={{
          content: { background: "#FAF6F3" },
          header: { background: "#FAF6F3" },
        }}
      >
        {status === "sent" ? (
          <div className={classes.done} role="status">
            <p style={{ margin: 0 }}>
              Thank you — that&apos;s been added to the list.
            </p>
            <div className={classes.actions}>
              <button type="button" className={`${shared.buttonOutline} ${classes.submit}`} onClick={reset}>
                Send another
              </button>
              <button type="button" className={`${shared.buttonPrimary} ${classes.submit}`} onClick={close}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className={classes.form} onSubmit={onSubmit} noValidate>
            <fieldset className={classes.kinds}>
              <legend className="visually-hidden">Type of feedback</legend>
              {feedbackTypes.map((t) => (
                <label key={t} className={classes.kind}>
                  <input
                    type="radio"
                    name="kind"
                    value={t}
                    checked={kind === t}
                    onChange={() => setKind(t)}
                  />
                  <span className={classes.kindName}>{t}</span>
                  <span className={classes.kindHint}>{kindHints[t]}</span>
                </label>
              ))}
            </fieldset>

            <label className={classes.field} htmlFor="feedback-title">
              Title
              <input
                id="feedback-title"
                className={classes.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={140}
                placeholder={
                  kind === "Bug"
                    ? "e.g. Gallery photos overlap on my phone"
                    : "e.g. Add a prices section"
                }
                data-autofocus
              />
            </label>

            <label className={classes.field} htmlFor="feedback-details">
              Details (optional)
              <textarea
                id="feedback-details"
                className={classes.input}
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                maxLength={4000}
                placeholder="What happened, or what would you like to change?"
              />
            </label>

            <div className={classes.actions}>
              {error ? (
                <p className={classes.error} role="alert">
                  {error}
                </p>
              ) : (
                <span />
              )}
              <button
                type="submit"
                className={`${shared.buttonPrimary} ${classes.submit}`}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}

export default FeedbackButton;

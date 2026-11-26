import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { feedbackTypes } from "@/sanity/feedbackOptions";

// Server-only: the write token never reaches the browser
const token = process.env.SANITY_API_WRITE_TOKEN;

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const clip = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  if (!token) {
    return NextResponse.json(
      { error: "Feedback is not set up yet (missing SANITY_API_WRITE_TOKEN)" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const kind = clip(body.kind, 20);
  const title = clip(body.title, 140);
  const details = clip(body.details, 4000);
  const page = clip(body.page, 500);
  const device = clip(body.device, 200);

  if (!(feedbackTypes as readonly string[]).includes(kind) || title.length < 3) {
    return NextResponse.json(
      { error: "Please choose a type and add a short title" },
      { status: 400 }
    );
  }

  try {
    await writeClient.create({
      _type: "feedback",
      kind,
      title,
      details,
      status: "To do",
      page: /^https?:\/\//.test(page) ? page : undefined,
      device,
      submittedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Could not save feedback", error);
    return NextResponse.json({ error: "Could not save feedback" }, { status: 500 });
  }
}

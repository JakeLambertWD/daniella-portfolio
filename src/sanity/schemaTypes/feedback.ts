import { defineField, defineType } from "sanity";
import { feedbackStatuses, feedbackTypes } from "../feedbackOptions";

export default defineType({
  name: "feedback",
  title: "Feedback",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [...feedbackTypes],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [...feedbackStatuses],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "To do",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "page",
      title: "Sent from page",
      type: "url",
      readOnly: true,
    }),
    defineField({
      name: "device",
      title: "Device",
      description: "Screen size and browser when it was sent",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Sent",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "newest",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", kind: "kind", status: "status" },
    prepare: ({ title, kind, status }) => ({
      title,
      subtitle: `${kind ?? ""} · ${status ?? ""}`,
    }),
  },
});

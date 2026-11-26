import { defineField, defineType } from "sanity";

// Keep in sync with portfolioCategories in src/app/components/portfolioPhotos.ts
const categories = ["Bridal", "Occasion", "Natural"];

export default defineType({
  name: "photos",
  title: "Portfolio photos",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Description",
      description:
        "A short description of the look, e.g. “Bride with veil and crystal tiara”. Read aloud by screen readers and shown in the lightbox.",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "Which portfolio filter this photo appears under.",
      type: "string",
      options: { list: categories, layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      description:
        "Optional. Lower numbers show first. Photos without a number show after numbered ones, newest first.",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "alt", subtitle: "category", media: "image" },
  },
});

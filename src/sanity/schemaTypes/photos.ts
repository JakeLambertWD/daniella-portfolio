import { defineField, defineType } from "sanity";

export default defineType({
  name: "photos",
  title: "Photos",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

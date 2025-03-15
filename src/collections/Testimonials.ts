import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    defaultColumns: ["name", "diagnosis", "rating", "occupation"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "text",
      required: true,
    },
    {
      name: "diagnosis",
      type: "text",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "age",
      type: "number",
      min: 0,
      max: 150,
    },
    {
      name: "occupation",
      type: "text",
    },
    {
      name: "address",
      type: "text",
    },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
    },
  ],
};

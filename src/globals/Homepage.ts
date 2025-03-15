import { Block, GlobalConfig } from "payload";

const HeroGlobal: Block = {
  slug: "hero-block",
  fields: [
    {
      type: "text",
      name: "title",
    },
    {
      type: "text",
      name: "subtitle",
    },
    {
      type: "text",
      label: "Click to action",
      name: "cta",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

const TestimonialBlock: Block = {
  slug: "testimonial-block",
  fields: [
    {
      type: "text",
      name: "title",
    },
    {
      type: "text",
      name: "subtitle",
    },
    {
      type: "relationship",
      name: "testimonials",
      relationTo: "testimonials",
      hasMany: true,
    },
  ],
};

export const Homepage: GlobalConfig = {
  slug: "homepage",

  fields: [
    {
      type: "blocks",
      name: "blocks",
      blocks: [HeroGlobal, TestimonialBlock],
    },
  ],
};

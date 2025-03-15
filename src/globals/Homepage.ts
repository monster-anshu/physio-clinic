import { Block, GlobalConfig } from "payload";

const HeroGlobal: Block = {
  slug: "homepage-hero",
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

export const Homepage: GlobalConfig = {
  slug: "homepage",
  fields: [
    {
      type: "blocks",
      name: "hero",
      blocks: [HeroGlobal],
    },
  ],
};

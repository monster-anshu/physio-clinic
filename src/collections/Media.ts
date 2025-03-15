import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    //TODO: use s3 for production
    staticDir: "dev-only/media",
  },
  fields: [
    {
      name: "alt",
      required: false,
      type: "text",
    },
  ],
};

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "@/collections/Media";
import { Testimonials } from "@/collections/Testimonials";
import { Users } from "@/collections/Users";
import { Homepage } from "@/globals/Homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Media, Testimonials],
  globals: [Homepage],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  //TODO: use postgres for production
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.DATABASE_URI || "",
  //   },
  // }),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
});

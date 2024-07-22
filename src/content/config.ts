import { defineCollection, z } from "astro:content";

const legalPages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  legals: legalPages,
};

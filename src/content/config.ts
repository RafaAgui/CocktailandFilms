import { defineCollection, z } from "astro:content"

const films = defineCollection({
  schema: z.object({
    title: z.string(),
    director: z.string(),
    star: z.string(),
    year: z.string(),
    img: z.string(),
  }),
})

export const collections = { films }
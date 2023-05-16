import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.StoryCreateManyArtistInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    authorId: z.string().optional().nullable(),
  })
  .strict()

export const StoryCreateManyArtistInputObjectSchema = Schema

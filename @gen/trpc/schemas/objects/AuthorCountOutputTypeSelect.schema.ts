import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.AuthorCountOutputTypeSelect> = z
  .object({
    stories: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const AuthorCountOutputTypeSelectObjectSchema = Schema

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PhotoCreatetagsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const PhotoCreatetagsInputObjectSchema = Schema

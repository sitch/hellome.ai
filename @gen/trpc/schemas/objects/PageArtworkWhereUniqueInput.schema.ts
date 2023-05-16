import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PageArtworkWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const PageArtworkWhereUniqueInputObjectSchema = Schema

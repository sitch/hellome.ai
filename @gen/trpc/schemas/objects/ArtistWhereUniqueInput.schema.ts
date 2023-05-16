import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ArtistWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const ArtistWhereUniqueInputObjectSchema = Schema

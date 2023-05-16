import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PhotoWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string().optional(),
  })
  .strict()

export const PhotoWhereUniqueInputObjectSchema = Schema

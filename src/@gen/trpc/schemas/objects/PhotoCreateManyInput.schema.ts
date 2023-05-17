import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PhotoCreateManyInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    tags: z
      .union([
        z.lazy(() => PhotoCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    fileId: z.string(),
  })
  .strict()

export const PhotoCreateManyInputObjectSchema = Schema

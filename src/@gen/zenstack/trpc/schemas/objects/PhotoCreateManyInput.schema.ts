/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoCreateManyInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    height: z.number(),
    width: z.number(),
    tags: z
      .union([
        z.lazy(() => PhotoCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    fileId: z.string(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
  })
  .strict()

export const PhotoCreateManyInputObjectSchema = Schema

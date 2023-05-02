import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFArgsObjectSchema } from "./PDFArgs.schema"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"

const Schema: z.ZodType<Prisma.CloudFileSelect> = z
  .object({
    id: z.boolean().optional(),
    filename: z.boolean().optional(),
    stem: z.boolean().optional(),
    extension: z.boolean().optional(),
    size: z.boolean().optional(),
    mime: z.boolean().optional(),
    resourceType: z.boolean().optional(),
    metadata: z.boolean().optional(),
    key: z.boolean().optional(),
    bucket: z.boolean().optional(),
    region: z.boolean().optional(),
    publicUrl: z.boolean().optional(),
    privacy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const CloudFileSelectObjectSchema = Schema

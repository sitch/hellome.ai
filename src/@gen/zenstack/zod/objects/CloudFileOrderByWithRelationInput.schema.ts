/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PDFOrderByWithRelationInputObjectSchema } from "./PDFOrderByWithRelationInput.schema"
import { PhotoOrderByWithRelationInputObjectSchema } from "./PhotoOrderByWithRelationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileOrderByWithRelationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    filename: z.lazy(() => SortOrderSchema).optional(),
    stem: z.lazy(() => SortOrderSchema).optional(),
    extension: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    mime: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    metadata: z.lazy(() => SortOrderSchema).optional(),
    key: z.lazy(() => SortOrderSchema).optional(),
    bucket: z.lazy(() => SortOrderSchema).optional(),
    region: z.lazy(() => SortOrderSchema).optional(),
    publicUrl: z.lazy(() => SortOrderSchema).optional(),
    privacy: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    photo: z.lazy(() => PhotoOrderByWithRelationInputObjectSchema).optional(),
    pdf: z.lazy(() => PDFOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileOrderByWithRelationInputObjectSchema = Schema

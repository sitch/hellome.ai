import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PDFOrderByWithRelationInputObjectSchema } from './PDFOrderByWithRelationInput.schema'
import { PhotoOrderByWithRelationInputObjectSchema } from './PhotoOrderByWithRelationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    ext: z.lazy(() => SortOrderSchema).optional(),
    mime: z.lazy(() => SortOrderSchema).optional(),
    metadata: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    signature: z.lazy(() => SortOrderSchema).optional(),
    privacy: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    photo: z.lazy(() => PhotoOrderByWithRelationInputObjectSchema).optional(),
    pdf: z.lazy(() => PDFOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileOrderByWithRelationInputObjectSchema = Schema

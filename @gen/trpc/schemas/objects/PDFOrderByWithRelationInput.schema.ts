import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { CloudFileOrderByWithRelationInputObjectSchema } from './CloudFileOrderByWithRelationInput.schema'
import { EditionOrderByWithRelationInputObjectSchema } from './EditionOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    pages: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    file: z
      .lazy(() => CloudFileOrderByWithRelationInputObjectSchema)
      .optional(),
    edition: z
      .lazy(() => EditionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFOrderByWithRelationInputObjectSchema = Schema

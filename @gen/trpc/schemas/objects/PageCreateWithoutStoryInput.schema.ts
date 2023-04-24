import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import { PageArtworkCreateNestedManyWithoutPageInputObjectSchema } from './PageArtworkCreateNestedManyWithoutPageInput.schema'
import { PageTextCreateNestedManyWithoutPageInputObjectSchema } from './PageTextCreateNestedManyWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateWithoutStoryInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
    texts: z
      .lazy(() => PageTextCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageCreateWithoutStoryInputObjectSchema = Schema

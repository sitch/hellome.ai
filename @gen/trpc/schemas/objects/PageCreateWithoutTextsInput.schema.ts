import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import { StoryCreateNestedOneWithoutPagesInputObjectSchema } from './StoryCreateNestedOneWithoutPagesInput.schema'
import { PageArtworkCreateNestedManyWithoutPageInputObjectSchema } from './PageArtworkCreateNestedManyWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateWithoutTextsInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    story: z.lazy(() => StoryCreateNestedOneWithoutPagesInputObjectSchema),
    artworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageCreateWithoutTextsInputObjectSchema = Schema
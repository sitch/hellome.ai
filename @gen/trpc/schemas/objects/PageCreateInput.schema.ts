import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import { PageArtworkCreateNestedManyWithoutPageInputObjectSchema } from './PageArtworkCreateNestedManyWithoutPageInput.schema'
import { PageTextCreateNestedManyWithoutPageInputObjectSchema } from './PageTextCreateNestedManyWithoutPageInput.schema'
import { StoryCreateNestedOneWithoutPagesInputObjectSchema } from './StoryCreateNestedOneWithoutPagesInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCreateInput> = z
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
    texts: z
      .lazy(() => PageTextCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageCreateInputObjectSchema = Schema

import { z } from 'zod'
import { PageTextCreateNestedManyWithoutAuthorInputObjectSchema } from './PageTextCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateWithoutStoriesInput> = z
  .object({
    id: z.string().optional(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorCreateWithoutStoriesInputObjectSchema = Schema

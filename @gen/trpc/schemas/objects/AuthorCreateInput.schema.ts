import { z } from 'zod'
import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryCreateNestedManyWithoutAuthorInput.schema'
import { PageTextCreateNestedManyWithoutAuthorInputObjectSchema } from './PageTextCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorCreateInputObjectSchema = Schema

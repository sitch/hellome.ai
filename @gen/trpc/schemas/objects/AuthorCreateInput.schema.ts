import { PageTextCreateNestedManyWithoutAuthorInputObjectSchema } from './PageTextCreateNestedManyWithoutAuthorInput.schema'
import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryCreateNestedManyWithoutAuthorInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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

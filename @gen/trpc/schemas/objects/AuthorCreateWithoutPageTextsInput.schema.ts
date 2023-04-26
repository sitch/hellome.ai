import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryCreateNestedManyWithoutAuthorInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorCreateWithoutPageTextsInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorCreateWithoutPageTextsInputObjectSchema = Schema

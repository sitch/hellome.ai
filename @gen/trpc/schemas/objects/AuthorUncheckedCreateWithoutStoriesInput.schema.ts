import { PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PageTextUncheckedCreateNestedManyWithoutAuthorInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutStoriesInput> = z
  .object({
    id: z.string().optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutStoriesInputObjectSchema = Schema

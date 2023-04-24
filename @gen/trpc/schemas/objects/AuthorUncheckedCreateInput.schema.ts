import { z } from 'zod'
import { StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PageTextUncheckedCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateInputObjectSchema = Schema

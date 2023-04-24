import { z } from 'zod'
import { PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateNestedManyWithoutTranslatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    pageTexts: z
      .lazy(
        () =>
          PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const TranslatorUncheckedCreateInputObjectSchema = Schema

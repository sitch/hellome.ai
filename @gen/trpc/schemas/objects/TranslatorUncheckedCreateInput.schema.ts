import { PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateNestedManyWithoutTranslatorInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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

import { LocaleSchema } from '../enums/Locale.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EnumLocaleFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => LocaleSchema).optional(),
  })
  .strict()

export const EnumLocaleFieldUpdateOperationsInputObjectSchema = Schema

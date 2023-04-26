import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EnumPageTextTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PageTextTypeSchema).optional(),
  })
  .strict()

export const EnumPageTextTypeFieldUpdateOperationsInputObjectSchema = Schema

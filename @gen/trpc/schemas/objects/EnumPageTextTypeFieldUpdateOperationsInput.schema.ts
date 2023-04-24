import { z } from 'zod'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPageTextTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PageTextTypeSchema).optional(),
  })
  .strict()

export const EnumPageTextTypeFieldUpdateOperationsInputObjectSchema = Schema

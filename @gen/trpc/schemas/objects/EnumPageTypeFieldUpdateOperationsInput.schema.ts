import { z } from 'zod'
import { PageTypeSchema } from '../enums/PageType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPageTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PageTypeSchema).optional(),
  })
  .strict()

export const EnumPageTypeFieldUpdateOperationsInputObjectSchema = Schema

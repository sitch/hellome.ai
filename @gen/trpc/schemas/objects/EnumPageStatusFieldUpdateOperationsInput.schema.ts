import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PageStatusSchema).optional(),
  })
  .strict()

export const EnumPageStatusFieldUpdateOperationsInputObjectSchema = Schema

import { z } from 'zod'
import { CloudFileWhereInputObjectSchema } from './CloudFileWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileRelationFilter> = z
  .object({
    is: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileRelationFilterObjectSchema = Schema

import { CloudFileWhereInputObjectSchema } from './CloudFileWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileRelationFilter> = z
  .object({
    is: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileRelationFilterObjectSchema = Schema

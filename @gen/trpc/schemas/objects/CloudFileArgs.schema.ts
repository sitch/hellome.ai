import { z } from 'zod'
import { CloudFileIncludeObjectSchema } from './CloudFileInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileArgs> = z
  .object({
    include: z.lazy(() => CloudFileIncludeObjectSchema).optional(),
  })
  .strict()

export const CloudFileArgsObjectSchema = Schema

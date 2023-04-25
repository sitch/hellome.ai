import { z } from 'zod'
import { CloudFileSelectObjectSchema } from './CloudFileSelect.schema'
import { CloudFileIncludeObjectSchema } from './CloudFileInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileArgs> = z
  .object({
    select: z.lazy(() => CloudFileSelectObjectSchema).optional(),
    include: z.lazy(() => CloudFileIncludeObjectSchema).optional(),
  })
  .strict()

export const CloudFileArgsObjectSchema = Schema

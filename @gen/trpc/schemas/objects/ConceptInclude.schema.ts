import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { PhotoFindManySchema } from '../findManyPhoto.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    photos: z
      .union([z.boolean(), z.lazy(() => PhotoFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const ConceptIncludeObjectSchema = Schema

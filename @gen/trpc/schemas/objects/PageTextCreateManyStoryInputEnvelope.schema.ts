import { z } from 'zod'
import { PageTextCreateManyStoryInputObjectSchema } from './PageTextCreateManyStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyStoryInputObjectSchema),
      z.lazy(() => PageTextCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyStoryInputEnvelopeObjectSchema = Schema

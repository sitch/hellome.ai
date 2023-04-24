import { z } from 'zod'
import { StoryCreateManyAuthorInputObjectSchema } from './StoryCreateManyAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => StoryCreateManyAuthorInputObjectSchema),
      z.lazy(() => StoryCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const StoryCreateManyAuthorInputEnvelopeObjectSchema = Schema

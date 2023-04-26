import { PageCreateManyStoryInputObjectSchema } from './PageCreateManyStoryInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageCreateManyStoryInputObjectSchema),
      z.lazy(() => PageCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageCreateManyStoryInputEnvelopeObjectSchema = Schema

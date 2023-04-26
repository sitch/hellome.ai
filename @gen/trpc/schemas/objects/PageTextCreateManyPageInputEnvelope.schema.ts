import { PageTextCreateManyPageInputObjectSchema } from './PageTextCreateManyPageInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextCreateManyPageInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyPageInputObjectSchema),
      z.lazy(() => PageTextCreateManyPageInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyPageInputEnvelopeObjectSchema = Schema

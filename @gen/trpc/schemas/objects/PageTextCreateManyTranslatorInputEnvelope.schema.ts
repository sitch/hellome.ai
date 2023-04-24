import { z } from 'zod'
import { PageTextCreateManyTranslatorInputObjectSchema } from './PageTextCreateManyTranslatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateManyTranslatorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema),
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyTranslatorInputEnvelopeObjectSchema = Schema

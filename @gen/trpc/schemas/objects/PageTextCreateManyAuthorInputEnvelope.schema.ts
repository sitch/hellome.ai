import { PageTextCreateManyAuthorInputObjectSchema } from './PageTextCreateManyAuthorInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyAuthorInputObjectSchema),
      z.lazy(() => PageTextCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyAuthorInputEnvelopeObjectSchema = Schema

import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCreateManyInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    storyId: z.string(),
  })
  .strict()

export const PageCreateManyInputObjectSchema = Schema

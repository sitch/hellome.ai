import { PageStatusSchema } from '../enums/PageStatus.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutPageInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    storyId: z.string(),
    artistId: z.string(),
    photoId: z.string(),
  })
  .strict()

export const PageArtworkUncheckedCreateWithoutPageInputObjectSchema = Schema

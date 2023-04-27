import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateManyPageInput> = z
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

export const PageArtworkCreateManyPageInputObjectSchema = Schema

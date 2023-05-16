import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPageInput.schema"

const Schema: z.ZodType<Prisma.PageUncheckedCreateWithoutTextsInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    storyId: z.string(),
    artworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const PageUncheckedCreateWithoutTextsInputObjectSchema = Schema

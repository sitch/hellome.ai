import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPageInput.schema"
import { PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutPageInput.schema"

const Schema: z.ZodType<Prisma.PageUncheckedCreateWithoutStoryInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema,
      )
      .optional(),
    texts: z
      .lazy(() => PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageUncheckedCreateWithoutStoryInputObjectSchema = Schema

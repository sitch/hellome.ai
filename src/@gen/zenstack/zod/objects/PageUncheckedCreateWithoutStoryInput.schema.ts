/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPageInput.schema"
import { PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutPageInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUncheckedCreateWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
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

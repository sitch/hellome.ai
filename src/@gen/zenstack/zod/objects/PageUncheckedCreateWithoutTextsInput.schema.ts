/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPageInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUncheckedCreateWithoutTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    storyId: z.string(),
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
  })
  .strict()

export const PageUncheckedCreateWithoutTextsInputObjectSchema = Schema

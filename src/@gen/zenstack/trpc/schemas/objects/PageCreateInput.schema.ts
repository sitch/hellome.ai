/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageArtworkCreateNestedManyWithoutPageInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutPageInput.schema"
import { PageTextCreateNestedManyWithoutPageInputObjectSchema } from "./PageTextCreateNestedManyWithoutPageInput.schema"
import { StoryCreateNestedOneWithoutPagesInputObjectSchema } from "./StoryCreateNestedOneWithoutPagesInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageCreateInput, "zenstack_transaction" | "zenstack_guard">
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
    story: z.lazy(() => StoryCreateNestedOneWithoutPagesInputObjectSchema),
    artworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
    texts: z
      .lazy(() => PageTextCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageCreateInputObjectSchema = Schema

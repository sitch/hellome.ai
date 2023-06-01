/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTextTypeSchema } from "../enums/PageTextType.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUncheckedCreateWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    pageId: z.string(),
    storyId: z.string(),
    translatorId: z.string().optional().nullable(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
  })
  .strict()

export const PageTextUncheckedCreateWithoutAuthorInputObjectSchema = Schema

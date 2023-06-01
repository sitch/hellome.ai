/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyStoryInputObjectSchema } from "./PageTextCreateManyStoryInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateManyStoryInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyStoryInputObjectSchema),
      z.lazy(() => PageTextCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyStoryInputEnvelopeObjectSchema = Schema

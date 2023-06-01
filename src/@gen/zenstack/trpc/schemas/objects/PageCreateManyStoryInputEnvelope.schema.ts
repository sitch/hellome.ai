/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateManyStoryInputObjectSchema } from "./PageCreateManyStoryInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageCreateManyStoryInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageCreateManyStoryInputObjectSchema),
      z.lazy(() => PageCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageCreateManyStoryInputEnvelopeObjectSchema = Schema

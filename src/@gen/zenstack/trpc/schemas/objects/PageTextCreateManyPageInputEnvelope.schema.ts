/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyPageInputObjectSchema } from "./PageTextCreateManyPageInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateManyPageInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyPageInputObjectSchema),
      z.lazy(() => PageTextCreateManyPageInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyPageInputEnvelopeObjectSchema = Schema

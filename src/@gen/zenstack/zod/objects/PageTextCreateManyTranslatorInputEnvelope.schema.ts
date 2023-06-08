/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyTranslatorInputObjectSchema } from "./PageTextCreateManyTranslatorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateManyTranslatorInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema),
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyTranslatorInputEnvelopeObjectSchema = Schema

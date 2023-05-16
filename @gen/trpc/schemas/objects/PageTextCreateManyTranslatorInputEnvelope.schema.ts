import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyTranslatorInputObjectSchema } from "./PageTextCreateManyTranslatorInput.schema"

const Schema: z.ZodType<Prisma.PageTextCreateManyTranslatorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema),
      z.lazy(() => PageTextCreateManyTranslatorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyTranslatorInputEnvelopeObjectSchema = Schema

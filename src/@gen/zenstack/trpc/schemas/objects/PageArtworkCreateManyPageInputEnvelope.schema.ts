/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPageInputObjectSchema } from "./PageArtworkCreateManyPageInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateManyPageInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyPageInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyPageInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyPageInputEnvelopeObjectSchema = Schema

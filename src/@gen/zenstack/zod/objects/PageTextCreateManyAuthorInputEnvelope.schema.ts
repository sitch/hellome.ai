/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyAuthorInputObjectSchema } from "./PageTextCreateManyAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateManyAuthorInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageTextCreateManyAuthorInputObjectSchema),
      z.lazy(() => PageTextCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageTextCreateManyAuthorInputEnvelopeObjectSchema = Schema

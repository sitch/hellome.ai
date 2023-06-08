/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateManyUserInputObjectSchema } from "./EditionCreateManyUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateManyUserInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => EditionCreateManyUserInputObjectSchema),
      z.lazy(() => EditionCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const EditionCreateManyUserInputEnvelopeObjectSchema = Schema

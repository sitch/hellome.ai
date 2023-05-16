import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateManyUserInputObjectSchema } from "./EditionCreateManyUserInput.schema"

const Schema: z.ZodType<Prisma.EditionCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EditionCreateManyUserInputObjectSchema),
      z.lazy(() => EditionCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const EditionCreateManyUserInputEnvelopeObjectSchema = Schema

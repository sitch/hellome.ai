/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateManyDreamboothTrainingInputObjectSchema } from "./ConceptCreateManyDreamboothTrainingInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCreateManyDreamboothTrainingInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => ConceptCreateManyDreamboothTrainingInputObjectSchema),
      z
        .lazy(() => ConceptCreateManyDreamboothTrainingInputObjectSchema)
        .array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ConceptCreateManyDreamboothTrainingInputEnvelopeObjectSchema =
  Schema

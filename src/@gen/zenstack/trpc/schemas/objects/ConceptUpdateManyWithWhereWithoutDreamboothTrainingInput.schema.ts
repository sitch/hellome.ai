/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptScalarWhereInputObjectSchema } from "./ConceptScalarWhereInput.schema"
import { ConceptUncheckedUpdateManyWithoutConceptInputObjectSchema } from "./ConceptUncheckedUpdateManyWithoutConceptInput.schema"
import { ConceptUpdateManyMutationInputObjectSchema } from "./ConceptUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpdateManyWithWhereWithoutDreamboothTrainingInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ConceptUpdateManyMutationInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateManyWithoutConceptInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpdateManyWithWhereWithoutDreamboothTrainingInputObjectSchema =
  Schema

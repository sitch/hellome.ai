/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptScalarWhereInputObjectSchema } from "./ConceptScalarWhereInput.schema"
import { ConceptUncheckedUpdateManyWithoutConceptsInputObjectSchema } from "./ConceptUncheckedUpdateManyWithoutConceptsInput.schema"
import { ConceptUpdateManyMutationInputObjectSchema } from "./ConceptUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpdateManyWithWhereWithoutPhotosInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ConceptUpdateManyMutationInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateManyWithoutConceptsInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpdateManyWithWhereWithoutPhotosInputObjectSchema = Schema

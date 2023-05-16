import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptScalarWhereInputObjectSchema } from "./ConceptScalarWhereInput.schema"
import { ConceptUncheckedUpdateManyWithoutConceptsInputObjectSchema } from "./ConceptUncheckedUpdateManyWithoutConceptsInput.schema"
import { ConceptUpdateManyMutationInputObjectSchema } from "./ConceptUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.ConceptUpdateManyWithWhereWithoutPhotosInput> = z
  .object({
    where: z.lazy(() => ConceptScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ConceptUpdateManyMutationInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateManyWithoutConceptsInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpdateManyWithWhereWithoutPhotosInputObjectSchema = Schema

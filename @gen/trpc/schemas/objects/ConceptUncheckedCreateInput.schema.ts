import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { PhotoUncheckedCreateNestedManyWithoutConceptsInputObjectSchema } from "./PhotoUncheckedCreateNestedManyWithoutConceptsInput.schema"

const Schema: z.ZodType<Prisma.ConceptUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => ConceptTypeSchema),
    description: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    photos: z
      .lazy(
        () => PhotoUncheckedCreateNestedManyWithoutConceptsInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ConceptUncheckedCreateInputObjectSchema = Schema

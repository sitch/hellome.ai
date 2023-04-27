import { z } from "zod"

import { ConceptUpdateManyMutationInputObjectSchema } from "./objects/ConceptUpdateManyMutationInput.schema"
import { ConceptWhereInputObjectSchema } from "./objects/ConceptWhereInput.schema"

export const ConceptUpdateManySchema = z.object({
  data: ConceptUpdateManyMutationInputObjectSchema,
  where: ConceptWhereInputObjectSchema.optional(),
})

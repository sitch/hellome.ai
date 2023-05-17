import { z } from "zod"

import { ConceptCreateInputObjectSchema } from "./objects/ConceptCreateInput.schema"
import { ConceptIncludeObjectSchema } from "./objects/ConceptInclude.schema"
import { ConceptSelectObjectSchema } from "./objects/ConceptSelect.schema"
import { ConceptUncheckedCreateInputObjectSchema } from "./objects/ConceptUncheckedCreateInput.schema"
import { ConceptUncheckedUpdateInputObjectSchema } from "./objects/ConceptUncheckedUpdateInput.schema"
import { ConceptUpdateInputObjectSchema } from "./objects/ConceptUpdateInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./objects/ConceptWhereUniqueInput.schema"

export const ConceptUpsertSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  where: ConceptWhereUniqueInputObjectSchema,
  create: z.union([
    ConceptCreateInputObjectSchema,
    ConceptUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConceptUpdateInputObjectSchema,
    ConceptUncheckedUpdateInputObjectSchema,
  ]),
})

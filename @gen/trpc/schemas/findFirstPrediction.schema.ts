import { PredictionScalarFieldEnumSchema } from './enums/PredictionScalarFieldEnum.schema'
import { PredictionOrderByWithRelationInputObjectSchema } from './objects/PredictionOrderByWithRelationInput.schema'
import { PredictionSelectObjectSchema } from './objects/PredictionSelect.schema'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'
import { z } from 'zod'

export const PredictionFindFirstSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  orderBy: z
    .union([
      PredictionOrderByWithRelationInputObjectSchema,
      PredictionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PredictionWhereInputObjectSchema.optional(),
  cursor: PredictionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PredictionScalarFieldEnumSchema).optional(),
})

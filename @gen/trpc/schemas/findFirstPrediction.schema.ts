import { z } from 'zod'
import { PredictionOrderByWithRelationInputObjectSchema } from './objects/PredictionOrderByWithRelationInput.schema'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'
import { PredictionScalarFieldEnumSchema } from './enums/PredictionScalarFieldEnum.schema'

export const PredictionFindFirstSchema = z.object({
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

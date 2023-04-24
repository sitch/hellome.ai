import { z } from 'zod'
import { PDFOrderByWithRelationInputObjectSchema } from './objects/PDFOrderByWithRelationInput.schema'
import { PDFWhereInputObjectSchema } from './objects/PDFWhereInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'
import { PDFCountAggregateInputObjectSchema } from './objects/PDFCountAggregateInput.schema'
import { PDFMinAggregateInputObjectSchema } from './objects/PDFMinAggregateInput.schema'
import { PDFMaxAggregateInputObjectSchema } from './objects/PDFMaxAggregateInput.schema'
import { PDFAvgAggregateInputObjectSchema } from './objects/PDFAvgAggregateInput.schema'
import { PDFSumAggregateInputObjectSchema } from './objects/PDFSumAggregateInput.schema'

export const PDFAggregateSchema = z.object({
  orderBy: z
    .union([
      PDFOrderByWithRelationInputObjectSchema,
      PDFOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PDFWhereInputObjectSchema.optional(),
  cursor: PDFWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PDFCountAggregateInputObjectSchema])
    .optional(),
  _min: PDFMinAggregateInputObjectSchema.optional(),
  _max: PDFMaxAggregateInputObjectSchema.optional(),
  _avg: PDFAvgAggregateInputObjectSchema.optional(),
  _sum: PDFSumAggregateInputObjectSchema.optional(),
})
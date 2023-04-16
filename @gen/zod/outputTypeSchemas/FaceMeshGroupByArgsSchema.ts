import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshWhereInputSchema } from '../inputTypeSchemas/FaceMeshWhereInputSchema'
import { FaceMeshOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FaceMeshOrderByWithAggregationInputSchema'
import { FaceMeshScalarFieldEnumSchema } from '../inputTypeSchemas/FaceMeshScalarFieldEnumSchema'
import { FaceMeshScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FaceMeshScalarWhereWithAggregatesInputSchema'

export const FaceMeshGroupByArgsSchema: z.ZodType<Prisma.FaceMeshGroupByArgs> = z.object({
  where: FaceMeshWhereInputSchema.optional(),
  orderBy: z.union([ FaceMeshOrderByWithAggregationInputSchema.array(),FaceMeshOrderByWithAggregationInputSchema ]).optional(),
  by: FaceMeshScalarFieldEnumSchema.array(),
  having: FaceMeshScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default FaceMeshGroupByArgsSchema;

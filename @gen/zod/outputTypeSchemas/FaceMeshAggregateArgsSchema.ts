import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshWhereInputSchema } from '../inputTypeSchemas/FaceMeshWhereInputSchema'
import { FaceMeshOrderByWithRelationInputSchema } from '../inputTypeSchemas/FaceMeshOrderByWithRelationInputSchema'
import { FaceMeshWhereUniqueInputSchema } from '../inputTypeSchemas/FaceMeshWhereUniqueInputSchema'

export const FaceMeshAggregateArgsSchema: z.ZodType<Prisma.FaceMeshAggregateArgs> = z.object({
  where: FaceMeshWhereInputSchema.optional(),
  orderBy: z.union([ FaceMeshOrderByWithRelationInputSchema.array(),FaceMeshOrderByWithRelationInputSchema ]).optional(),
  cursor: FaceMeshWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default FaceMeshAggregateArgsSchema;

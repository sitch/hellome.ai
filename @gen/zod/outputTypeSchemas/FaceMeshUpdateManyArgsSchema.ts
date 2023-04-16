import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshUpdateManyMutationInputSchema } from '../inputTypeSchemas/FaceMeshUpdateManyMutationInputSchema'
import { FaceMeshUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FaceMeshUncheckedUpdateManyInputSchema'
import { FaceMeshWhereInputSchema } from '../inputTypeSchemas/FaceMeshWhereInputSchema'

export const FaceMeshUpdateManyArgsSchema: z.ZodType<Prisma.FaceMeshUpdateManyArgs> = z.object({
  data: z.union([ FaceMeshUpdateManyMutationInputSchema,FaceMeshUncheckedUpdateManyInputSchema ]),
  where: FaceMeshWhereInputSchema.optional(),
}).strict()

export default FaceMeshUpdateManyArgsSchema;

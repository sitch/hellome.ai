import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConceptPlaceUpdateManyMutationInputSchema'
import { ConceptPlaceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConceptPlaceUncheckedUpdateManyInputSchema'
import { ConceptPlaceWhereInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereInputSchema'

export const ConceptPlaceUpdateManyArgsSchema: z.ZodType<Prisma.ConceptPlaceUpdateManyArgs> = z.object({
  data: z.union([ ConceptPlaceUpdateManyMutationInputSchema,ConceptPlaceUncheckedUpdateManyInputSchema ]),
  where: ConceptPlaceWhereInputSchema.optional(),
}).strict()

export default ConceptPlaceUpdateManyArgsSchema;

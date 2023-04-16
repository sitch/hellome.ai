import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConceptPersonUpdateManyMutationInputSchema'
import { ConceptPersonUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConceptPersonUncheckedUpdateManyInputSchema'
import { ConceptPersonWhereInputSchema } from '../inputTypeSchemas/ConceptPersonWhereInputSchema'

export const ConceptPersonUpdateManyArgsSchema: z.ZodType<Prisma.ConceptPersonUpdateManyArgs> = z.object({
  data: z.union([ ConceptPersonUpdateManyMutationInputSchema,ConceptPersonUncheckedUpdateManyInputSchema ]),
  where: ConceptPersonWhereInputSchema.optional(),
}).strict()

export default ConceptPersonUpdateManyArgsSchema;

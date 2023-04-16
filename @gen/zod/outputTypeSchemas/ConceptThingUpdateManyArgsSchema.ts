import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConceptThingUpdateManyMutationInputSchema'
import { ConceptThingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConceptThingUncheckedUpdateManyInputSchema'
import { ConceptThingWhereInputSchema } from '../inputTypeSchemas/ConceptThingWhereInputSchema'

export const ConceptThingUpdateManyArgsSchema: z.ZodType<Prisma.ConceptThingUpdateManyArgs> = z.object({
  data: z.union([ ConceptThingUpdateManyMutationInputSchema,ConceptThingUncheckedUpdateManyInputSchema ]),
  where: ConceptThingWhereInputSchema.optional(),
}).strict()

export default ConceptThingUpdateManyArgsSchema;

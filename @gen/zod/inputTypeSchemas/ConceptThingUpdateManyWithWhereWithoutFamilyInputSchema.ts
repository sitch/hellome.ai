import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingScalarWhereInputSchema } from './ConceptThingScalarWhereInputSchema';
import { ConceptThingUpdateManyMutationInputSchema } from './ConceptThingUpdateManyMutationInputSchema';
import { ConceptThingUncheckedUpdateManyWithoutThingsInputSchema } from './ConceptThingUncheckedUpdateManyWithoutThingsInputSchema';

export const ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingUpdateManyWithWhereWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptThingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConceptThingUpdateManyMutationInputSchema),z.lazy(() => ConceptThingUncheckedUpdateManyWithoutThingsInputSchema) ]),
}).strict();

export default ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema;

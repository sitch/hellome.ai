import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingCreateWithoutUserInputSchema } from './ConceptThingCreateWithoutUserInputSchema';
import { ConceptThingUncheckedCreateWithoutUserInputSchema } from './ConceptThingUncheckedCreateWithoutUserInputSchema';

export const ConceptThingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptThingCreateOrConnectWithoutUserInputSchema;

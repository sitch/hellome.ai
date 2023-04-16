import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithoutUserInputSchema } from './ConceptThingUpdateWithoutUserInputSchema';
import { ConceptThingUncheckedUpdateWithoutUserInputSchema } from './ConceptThingUncheckedUpdateWithoutUserInputSchema';

export const ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptThingUpdateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema;

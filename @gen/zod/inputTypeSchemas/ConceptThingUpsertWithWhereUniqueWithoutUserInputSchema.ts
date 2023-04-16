import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithoutUserInputSchema } from './ConceptThingUpdateWithoutUserInputSchema';
import { ConceptThingUncheckedUpdateWithoutUserInputSchema } from './ConceptThingUncheckedUpdateWithoutUserInputSchema';
import { ConceptThingCreateWithoutUserInputSchema } from './ConceptThingCreateWithoutUserInputSchema';
import { ConceptThingUncheckedCreateWithoutUserInputSchema } from './ConceptThingUncheckedCreateWithoutUserInputSchema';

export const ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptThingUpdateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema;

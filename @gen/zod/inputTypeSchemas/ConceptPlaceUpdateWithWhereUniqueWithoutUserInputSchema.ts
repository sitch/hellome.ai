import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithoutUserInputSchema } from './ConceptPlaceUpdateWithoutUserInputSchema';
import { ConceptPlaceUncheckedUpdateWithoutUserInputSchema } from './ConceptPlaceUncheckedUpdateWithoutUserInputSchema';

export const ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptPlaceUpdateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema;

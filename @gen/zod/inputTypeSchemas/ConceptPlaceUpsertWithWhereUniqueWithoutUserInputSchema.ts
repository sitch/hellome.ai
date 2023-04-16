import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithoutUserInputSchema } from './ConceptPlaceUpdateWithoutUserInputSchema';
import { ConceptPlaceUncheckedUpdateWithoutUserInputSchema } from './ConceptPlaceUncheckedUpdateWithoutUserInputSchema';
import { ConceptPlaceCreateWithoutUserInputSchema } from './ConceptPlaceCreateWithoutUserInputSchema';
import { ConceptPlaceUncheckedCreateWithoutUserInputSchema } from './ConceptPlaceUncheckedCreateWithoutUserInputSchema';

export const ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptPlaceUpdateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceCreateWithoutUserInputSchema } from './ConceptPlaceCreateWithoutUserInputSchema';
import { ConceptPlaceUncheckedCreateWithoutUserInputSchema } from './ConceptPlaceUncheckedCreateWithoutUserInputSchema';

export const ConceptPlaceCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptPlaceCreateOrConnectWithoutUserInputSchema;

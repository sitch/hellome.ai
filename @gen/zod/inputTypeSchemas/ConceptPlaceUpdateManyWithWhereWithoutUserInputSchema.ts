import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceScalarWhereInputSchema } from './ConceptPlaceScalarWhereInputSchema';
import { ConceptPlaceUpdateManyMutationInputSchema } from './ConceptPlaceUpdateManyMutationInputSchema';
import { ConceptPlaceUncheckedUpdateManyWithoutPlacesInputSchema } from './ConceptPlaceUncheckedUpdateManyWithoutPlacesInputSchema';

export const ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptPlaceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConceptPlaceUpdateManyMutationInputSchema),z.lazy(() => ConceptPlaceUncheckedUpdateManyWithoutPlacesInputSchema) ]),
}).strict();

export default ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPersonUpdateWithoutUserInputSchema } from './ConceptPersonUpdateWithoutUserInputSchema';
import { ConceptPersonUncheckedUpdateWithoutUserInputSchema } from './ConceptPersonUncheckedUpdateWithoutUserInputSchema';
import { ConceptPersonCreateWithoutUserInputSchema } from './ConceptPersonCreateWithoutUserInputSchema';
import { ConceptPersonUncheckedCreateWithoutUserInputSchema } from './ConceptPersonUncheckedCreateWithoutUserInputSchema';

export const ConceptPersonUpsertWithoutUserInputSchema: z.ZodType<Prisma.ConceptPersonUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ConceptPersonUpdateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptPersonCreateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptPersonUpsertWithoutUserInputSchema;

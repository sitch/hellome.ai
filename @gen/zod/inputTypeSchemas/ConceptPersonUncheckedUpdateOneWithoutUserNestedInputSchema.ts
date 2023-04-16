import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPersonCreateWithoutUserInputSchema } from './ConceptPersonCreateWithoutUserInputSchema';
import { ConceptPersonUncheckedCreateWithoutUserInputSchema } from './ConceptPersonUncheckedCreateWithoutUserInputSchema';
import { ConceptPersonCreateOrConnectWithoutUserInputSchema } from './ConceptPersonCreateOrConnectWithoutUserInputSchema';
import { ConceptPersonUpsertWithoutUserInputSchema } from './ConceptPersonUpsertWithoutUserInputSchema';
import { ConceptPersonWhereUniqueInputSchema } from './ConceptPersonWhereUniqueInputSchema';
import { ConceptPersonUpdateWithoutUserInputSchema } from './ConceptPersonUpdateWithoutUserInputSchema';
import { ConceptPersonUncheckedUpdateWithoutUserInputSchema } from './ConceptPersonUncheckedUpdateWithoutUserInputSchema';

export const ConceptPersonUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ConceptPersonUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPersonCreateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptPersonCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ConceptPersonUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ConceptPersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConceptPersonUpdateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default ConceptPersonUncheckedUpdateOneWithoutUserNestedInputSchema;

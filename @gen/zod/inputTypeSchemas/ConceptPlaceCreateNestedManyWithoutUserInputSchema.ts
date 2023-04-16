import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateWithoutUserInputSchema } from './ConceptPlaceCreateWithoutUserInputSchema';
import { ConceptPlaceUncheckedCreateWithoutUserInputSchema } from './ConceptPlaceUncheckedCreateWithoutUserInputSchema';
import { ConceptPlaceCreateOrConnectWithoutUserInputSchema } from './ConceptPlaceCreateOrConnectWithoutUserInputSchema';
import { ConceptPlaceCreateManyUserInputEnvelopeSchema } from './ConceptPlaceCreateManyUserInputEnvelopeSchema';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';

export const ConceptPlaceCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema).array(),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptPlaceCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConceptPlaceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptPlaceCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConceptPlaceCreateNestedManyWithoutUserInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';
import { GenderSchema } from './GenderSchema';
import { FaceMeshCreateNestedOneWithoutUserInputSchema } from './FaceMeshCreateNestedOneWithoutUserInputSchema';
import { FamilyCreateNestedManyWithoutUserInputSchema } from './FamilyCreateNestedManyWithoutUserInputSchema';
import { ConceptPersonCreateNestedOneWithoutUserInputSchema } from './ConceptPersonCreateNestedOneWithoutUserInputSchema';
import { ConceptThingCreateNestedManyWithoutUserInputSchema } from './ConceptThingCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutPlacesInputSchema: z.ZodType<Prisma.UserCreateWithoutPlacesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  nickname: z.string().optional().nullable(),
  birthdate: z.coerce.date(),
  sex: z.lazy(() => SexSchema),
  gender: z.lazy(() => GenderSchema),
  genderPronounSingluar: z.string(),
  genderPronounPlural: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  face: z.lazy(() => FaceMeshCreateNestedOneWithoutUserInputSchema).optional(),
  families: z.lazy(() => FamilyCreateNestedManyWithoutUserInputSchema).optional(),
  person: z.lazy(() => ConceptPersonCreateNestedOneWithoutUserInputSchema).optional(),
  things: z.lazy(() => ConceptThingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutPlacesInputSchema;

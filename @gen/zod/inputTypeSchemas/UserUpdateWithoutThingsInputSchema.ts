import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SexSchema } from './SexSchema';
import { EnumSexFieldUpdateOperationsInputSchema } from './EnumSexFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { FaceMeshUpdateOneWithoutUserNestedInputSchema } from './FaceMeshUpdateOneWithoutUserNestedInputSchema';
import { FamilyUpdateManyWithoutUserNestedInputSchema } from './FamilyUpdateManyWithoutUserNestedInputSchema';
import { ConceptPersonUpdateOneWithoutUserNestedInputSchema } from './ConceptPersonUpdateOneWithoutUserNestedInputSchema';
import { ConceptPlaceUpdateManyWithoutUserNestedInputSchema } from './ConceptPlaceUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutThingsInputSchema: z.ZodType<Prisma.UserUpdateWithoutThingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nickname: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.lazy(() => SexSchema),z.lazy(() => EnumSexFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  genderPronounSingluar: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genderPronounPlural: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  face: z.lazy(() => FaceMeshUpdateOneWithoutUserNestedInputSchema).optional(),
  families: z.lazy(() => FamilyUpdateManyWithoutUserNestedInputSchema).optional(),
  person: z.lazy(() => ConceptPersonUpdateOneWithoutUserNestedInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutThingsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumSexFilterSchema } from './EnumSexFilterSchema';
import { SexSchema } from './SexSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { FaceMeshRelationFilterSchema } from './FaceMeshRelationFilterSchema';
import { FaceMeshWhereInputSchema } from './FaceMeshWhereInputSchema';
import { FamilyListRelationFilterSchema } from './FamilyListRelationFilterSchema';
import { ConceptPersonRelationFilterSchema } from './ConceptPersonRelationFilterSchema';
import { ConceptPersonWhereInputSchema } from './ConceptPersonWhereInputSchema';
import { ConceptPlaceListRelationFilterSchema } from './ConceptPlaceListRelationFilterSchema';
import { ConceptThingListRelationFilterSchema } from './ConceptThingListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faceMeshId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nickname: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  birthdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sex: z.union([ z.lazy(() => EnumSexFilterSchema),z.lazy(() => SexSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  genderPronounSingluar: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genderPronounPlural: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  face: z.union([ z.lazy(() => FaceMeshRelationFilterSchema),z.lazy(() => FaceMeshWhereInputSchema) ]).optional().nullable(),
  families: z.lazy(() => FamilyListRelationFilterSchema).optional(),
  person: z.union([ z.lazy(() => ConceptPersonRelationFilterSchema),z.lazy(() => ConceptPersonWhereInputSchema) ]).optional().nullable(),
  places: z.lazy(() => ConceptPlaceListRelationFilterSchema).optional(),
  things: z.lazy(() => ConceptThingListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;

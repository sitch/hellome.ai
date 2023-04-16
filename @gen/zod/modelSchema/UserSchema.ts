import { z } from 'zod';
import { SexSchema } from '../inputTypeSchemas/SexSchema'
import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
import type { FaceMeshWithRelations } from './FaceMeshSchema'
import type { FaceMeshPartialWithRelations } from './FaceMeshSchema'
import type { FaceMeshOptionalDefaultsWithRelations } from './FaceMeshSchema'
import type { FamilyWithRelations } from './FamilySchema'
import type { FamilyPartialWithRelations } from './FamilySchema'
import type { FamilyOptionalDefaultsWithRelations } from './FamilySchema'
import type { ConceptPersonWithRelations } from './ConceptPersonSchema'
import type { ConceptPersonPartialWithRelations } from './ConceptPersonSchema'
import type { ConceptPersonOptionalDefaultsWithRelations } from './ConceptPersonSchema'
import type { ConceptPlaceWithRelations } from './ConceptPlaceSchema'
import type { ConceptPlacePartialWithRelations } from './ConceptPlaceSchema'
import type { ConceptPlaceOptionalDefaultsWithRelations } from './ConceptPlaceSchema'
import type { ConceptThingWithRelations } from './ConceptThingSchema'
import type { ConceptThingPartialWithRelations } from './ConceptThingSchema'
import type { ConceptThingOptionalDefaultsWithRelations } from './ConceptThingSchema'
import { FaceMeshWithRelationsSchema } from './FaceMeshSchema'
import { FaceMeshPartialWithRelationsSchema } from './FaceMeshSchema'
import { FaceMeshOptionalDefaultsWithRelationsSchema } from './FaceMeshSchema'
import { FamilyWithRelationsSchema } from './FamilySchema'
import { FamilyPartialWithRelationsSchema } from './FamilySchema'
import { FamilyOptionalDefaultsWithRelationsSchema } from './FamilySchema'
import { ConceptPersonWithRelationsSchema } from './ConceptPersonSchema'
import { ConceptPersonPartialWithRelationsSchema } from './ConceptPersonSchema'
import { ConceptPersonOptionalDefaultsWithRelationsSchema } from './ConceptPersonSchema'
import { ConceptPlaceWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptPlacePartialWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptPlaceOptionalDefaultsWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptThingWithRelationsSchema } from './ConceptThingSchema'
import { ConceptThingPartialWithRelationsSchema } from './ConceptThingSchema'
import { ConceptThingOptionalDefaultsWithRelationsSchema } from './ConceptThingSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  sex: SexSchema,
  gender: GenderSchema,
  id: z.string().cuid(),
  faceMeshId: z.string().nullable(),
  name: z.string(),
  nickname: z.string().nullable(),
  birthdate: z.coerce.date(),
  genderPronounSingluar: z.string(),
  genderPronounPlural: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  face?: FaceMeshWithRelations | null;
  families: FamilyWithRelations[];
  person?: ConceptPersonWithRelations | null;
  places: ConceptPlaceWithRelations[];
  things: ConceptThingWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  face: z.lazy(() => FaceMeshWithRelationsSchema).nullable(),
  families: z.lazy(() => FamilyWithRelationsSchema).array(),
  person: z.lazy(() => ConceptPersonWithRelationsSchema).nullable(),
  places: z.lazy(() => ConceptPlaceWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
  face?: FaceMeshOptionalDefaultsWithRelations | null;
  families: FamilyOptionalDefaultsWithRelations[];
  person?: ConceptPersonOptionalDefaultsWithRelations | null;
  places: ConceptPlaceOptionalDefaultsWithRelations[];
  things: ConceptThingOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  face: z.lazy(() => FaceMeshOptionalDefaultsWithRelationsSchema).nullable(),
  families: z.lazy(() => FamilyOptionalDefaultsWithRelationsSchema).array(),
  person: z.lazy(() => ConceptPersonOptionalDefaultsWithRelationsSchema).nullable(),
  places: z.lazy(() => ConceptPlaceOptionalDefaultsWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  face?: FaceMeshPartialWithRelations | null;
  families?: FamilyPartialWithRelations[];
  person?: ConceptPersonPartialWithRelations | null;
  places?: ConceptPlacePartialWithRelations[];
  things?: ConceptThingPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  face: z.lazy(() => FaceMeshPartialWithRelationsSchema).nullable(),
  families: z.lazy(() => FamilyPartialWithRelationsSchema).array(),
  person: z.lazy(() => ConceptPersonPartialWithRelationsSchema).nullable(),
  places: z.lazy(() => ConceptPlacePartialWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingPartialWithRelationsSchema).array(),
})).partial()

export default UserSchema;

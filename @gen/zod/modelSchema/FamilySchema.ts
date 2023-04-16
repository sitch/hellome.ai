import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { ConceptPlaceWithRelations } from './ConceptPlaceSchema'
import type { ConceptPlacePartialWithRelations } from './ConceptPlaceSchema'
import type { ConceptPlaceOptionalDefaultsWithRelations } from './ConceptPlaceSchema'
import type { ConceptThingWithRelations } from './ConceptThingSchema'
import type { ConceptThingPartialWithRelations } from './ConceptThingSchema'
import type { ConceptThingOptionalDefaultsWithRelations } from './ConceptThingSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { ConceptPlaceWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptPlacePartialWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptPlaceOptionalDefaultsWithRelationsSchema } from './ConceptPlaceSchema'
import { ConceptThingWithRelationsSchema } from './ConceptThingSchema'
import { ConceptThingPartialWithRelationsSchema } from './ConceptThingSchema'
import { ConceptThingOptionalDefaultsWithRelationsSchema } from './ConceptThingSchema'

/////////////////////////////////////////
// FAMILY SCHEMA
/////////////////////////////////////////

export const FamilySchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Family = z.infer<typeof FamilySchema>

/////////////////////////////////////////
// FAMILY PARTIAL SCHEMA
/////////////////////////////////////////

export const FamilyPartialSchema = FamilySchema.partial()

export type FamilyPartial = z.infer<typeof FamilyPartialSchema>

/////////////////////////////////////////
// FAMILY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FamilyOptionalDefaultsSchema = FamilySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type FamilyOptionalDefaults = z.infer<typeof FamilyOptionalDefaultsSchema>

/////////////////////////////////////////
// FAMILY RELATION SCHEMA
/////////////////////////////////////////

export type FamilyRelations = {
  user: UserWithRelations[];
  places: ConceptPlaceWithRelations[];
  things: ConceptThingWithRelations[];
};

export type FamilyWithRelations = z.infer<typeof FamilySchema> & FamilyRelations

export const FamilyWithRelationsSchema: z.ZodType<FamilyWithRelations> = FamilySchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema).array(),
  places: z.lazy(() => ConceptPlaceWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// FAMILY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type FamilyOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations[];
  places: ConceptPlaceOptionalDefaultsWithRelations[];
  things: ConceptThingOptionalDefaultsWithRelations[];
};

export type FamilyOptionalDefaultsWithRelations = z.infer<typeof FamilyOptionalDefaultsSchema> & FamilyOptionalDefaultsRelations

export const FamilyOptionalDefaultsWithRelationsSchema: z.ZodType<FamilyOptionalDefaultsWithRelations> = FamilyOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).array(),
  places: z.lazy(() => ConceptPlaceOptionalDefaultsWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// FAMILY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type FamilyPartialRelations = {
  user?: UserPartialWithRelations[];
  places?: ConceptPlacePartialWithRelations[];
  things?: ConceptThingPartialWithRelations[];
};

export type FamilyPartialWithRelations = z.infer<typeof FamilyPartialSchema> & FamilyPartialRelations

export const FamilyPartialWithRelationsSchema: z.ZodType<FamilyPartialWithRelations> = FamilyPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema).array(),
  places: z.lazy(() => ConceptPlacePartialWithRelationsSchema).array(),
  things: z.lazy(() => ConceptThingPartialWithRelationsSchema).array(),
})).partial()

export default FamilySchema;

import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { FamilyWithRelations } from './FamilySchema'
import type { FamilyPartialWithRelations } from './FamilySchema'
import type { FamilyOptionalDefaultsWithRelations } from './FamilySchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { FamilyWithRelationsSchema } from './FamilySchema'
import { FamilyPartialWithRelationsSchema } from './FamilySchema'
import { FamilyOptionalDefaultsWithRelationsSchema } from './FamilySchema'

/////////////////////////////////////////
// CONCEPT PLACE SCHEMA
/////////////////////////////////////////

export const ConceptPlaceSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  familyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ConceptPlace = z.infer<typeof ConceptPlaceSchema>

/////////////////////////////////////////
// CONCEPT PLACE PARTIAL SCHEMA
/////////////////////////////////////////

export const ConceptPlacePartialSchema = ConceptPlaceSchema.partial()

export type ConceptPlacePartial = z.infer<typeof ConceptPlacePartialSchema>

/////////////////////////////////////////
// CONCEPT PLACE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ConceptPlaceOptionalDefaultsSchema = ConceptPlaceSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ConceptPlaceOptionalDefaults = z.infer<typeof ConceptPlaceOptionalDefaultsSchema>

/////////////////////////////////////////
// CONCEPT PLACE RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPlaceRelations = {
  user: UserWithRelations;
  Family: FamilyWithRelations;
};

export type ConceptPlaceWithRelations = z.infer<typeof ConceptPlaceSchema> & ConceptPlaceRelations

export const ConceptPlaceWithRelationsSchema: z.ZodType<ConceptPlaceWithRelations> = ConceptPlaceSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  Family: z.lazy(() => FamilyWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT PLACE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPlaceOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
  Family: FamilyOptionalDefaultsWithRelations;
};

export type ConceptPlaceOptionalDefaultsWithRelations = z.infer<typeof ConceptPlaceOptionalDefaultsSchema> & ConceptPlaceOptionalDefaultsRelations

export const ConceptPlaceOptionalDefaultsWithRelationsSchema: z.ZodType<ConceptPlaceOptionalDefaultsWithRelations> = ConceptPlaceOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  Family: z.lazy(() => FamilyOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT PLACE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPlacePartialRelations = {
  user?: UserPartialWithRelations;
  Family?: FamilyPartialWithRelations;
};

export type ConceptPlacePartialWithRelations = z.infer<typeof ConceptPlacePartialSchema> & ConceptPlacePartialRelations

export const ConceptPlacePartialWithRelationsSchema: z.ZodType<ConceptPlacePartialWithRelations> = ConceptPlacePartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  Family: z.lazy(() => FamilyPartialWithRelationsSchema),
})).partial()

export default ConceptPlaceSchema;

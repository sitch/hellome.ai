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
// CONCEPT THING SCHEMA
/////////////////////////////////////////

export const ConceptThingSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  familyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ConceptThing = z.infer<typeof ConceptThingSchema>

/////////////////////////////////////////
// CONCEPT THING PARTIAL SCHEMA
/////////////////////////////////////////

export const ConceptThingPartialSchema = ConceptThingSchema.partial()

export type ConceptThingPartial = z.infer<typeof ConceptThingPartialSchema>

/////////////////////////////////////////
// CONCEPT THING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ConceptThingOptionalDefaultsSchema = ConceptThingSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ConceptThingOptionalDefaults = z.infer<typeof ConceptThingOptionalDefaultsSchema>

/////////////////////////////////////////
// CONCEPT THING RELATION SCHEMA
/////////////////////////////////////////

export type ConceptThingRelations = {
  user: UserWithRelations;
  Family: FamilyWithRelations;
};

export type ConceptThingWithRelations = z.infer<typeof ConceptThingSchema> & ConceptThingRelations

export const ConceptThingWithRelationsSchema: z.ZodType<ConceptThingWithRelations> = ConceptThingSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  Family: z.lazy(() => FamilyWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT THING OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ConceptThingOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
  Family: FamilyOptionalDefaultsWithRelations;
};

export type ConceptThingOptionalDefaultsWithRelations = z.infer<typeof ConceptThingOptionalDefaultsSchema> & ConceptThingOptionalDefaultsRelations

export const ConceptThingOptionalDefaultsWithRelationsSchema: z.ZodType<ConceptThingOptionalDefaultsWithRelations> = ConceptThingOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  Family: z.lazy(() => FamilyOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT THING PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConceptThingPartialRelations = {
  user?: UserPartialWithRelations;
  Family?: FamilyPartialWithRelations;
};

export type ConceptThingPartialWithRelations = z.infer<typeof ConceptThingPartialSchema> & ConceptThingPartialRelations

export const ConceptThingPartialWithRelationsSchema: z.ZodType<ConceptThingPartialWithRelations> = ConceptThingPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  Family: z.lazy(() => FamilyPartialWithRelationsSchema),
})).partial()

export default ConceptThingSchema;

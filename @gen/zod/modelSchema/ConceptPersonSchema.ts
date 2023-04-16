import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// CONCEPT PERSON SCHEMA
/////////////////////////////////////////

export const ConceptPersonSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ConceptPerson = z.infer<typeof ConceptPersonSchema>

/////////////////////////////////////////
// CONCEPT PERSON PARTIAL SCHEMA
/////////////////////////////////////////

export const ConceptPersonPartialSchema = ConceptPersonSchema.partial()

export type ConceptPersonPartial = z.infer<typeof ConceptPersonPartialSchema>

/////////////////////////////////////////
// CONCEPT PERSON OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ConceptPersonOptionalDefaultsSchema = ConceptPersonSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ConceptPersonOptionalDefaults = z.infer<typeof ConceptPersonOptionalDefaultsSchema>

/////////////////////////////////////////
// CONCEPT PERSON RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPersonRelations = {
  user: UserWithRelations;
};

export type ConceptPersonWithRelations = z.infer<typeof ConceptPersonSchema> & ConceptPersonRelations

export const ConceptPersonWithRelationsSchema: z.ZodType<ConceptPersonWithRelations> = ConceptPersonSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT PERSON OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPersonOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
};

export type ConceptPersonOptionalDefaultsWithRelations = z.infer<typeof ConceptPersonOptionalDefaultsSchema> & ConceptPersonOptionalDefaultsRelations

export const ConceptPersonOptionalDefaultsWithRelationsSchema: z.ZodType<ConceptPersonOptionalDefaultsWithRelations> = ConceptPersonOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT PERSON PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConceptPersonPartialRelations = {
  user?: UserPartialWithRelations;
};

export type ConceptPersonPartialWithRelations = z.infer<typeof ConceptPersonPartialSchema> & ConceptPersonPartialRelations

export const ConceptPersonPartialWithRelationsSchema: z.ZodType<ConceptPersonPartialWithRelations> = ConceptPersonPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export default ConceptPersonSchema;

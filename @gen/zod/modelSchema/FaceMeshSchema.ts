import { z } from 'zod';
import { InputJsonValue } from "../inputTypeSchemas/InputJsonValue"
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// FACE MESH SCHEMA
/////////////////////////////////////////

export const FaceMeshSchema = z.object({
  id: z.string().cuid(),
  data: InputJsonValue,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type FaceMesh = z.infer<typeof FaceMeshSchema>

/////////////////////////////////////////
// FACE MESH PARTIAL SCHEMA
/////////////////////////////////////////

export const FaceMeshPartialSchema = FaceMeshSchema.partial()

export type FaceMeshPartial = z.infer<typeof FaceMeshPartialSchema>

/////////////////////////////////////////
// FACE MESH OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FaceMeshOptionalDefaultsSchema = FaceMeshSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type FaceMeshOptionalDefaults = z.infer<typeof FaceMeshOptionalDefaultsSchema>

/////////////////////////////////////////
// FACE MESH RELATION SCHEMA
/////////////////////////////////////////

export type FaceMeshRelations = {
  User: UserWithRelations[];
};

export type FaceMeshWithRelations = z.infer<typeof FaceMeshSchema> & FaceMeshRelations

export const FaceMeshWithRelationsSchema: z.ZodType<FaceMeshWithRelations> = FaceMeshSchema.merge(z.object({
  User: z.lazy(() => UserWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// FACE MESH OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type FaceMeshOptionalDefaultsRelations = {
  User: UserOptionalDefaultsWithRelations[];
};

export type FaceMeshOptionalDefaultsWithRelations = z.infer<typeof FaceMeshOptionalDefaultsSchema> & FaceMeshOptionalDefaultsRelations

export const FaceMeshOptionalDefaultsWithRelationsSchema: z.ZodType<FaceMeshOptionalDefaultsWithRelations> = FaceMeshOptionalDefaultsSchema.merge(z.object({
  User: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// FACE MESH PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type FaceMeshPartialRelations = {
  User?: UserPartialWithRelations[];
};

export type FaceMeshPartialWithRelations = z.infer<typeof FaceMeshPartialSchema> & FaceMeshPartialRelations

export const FaceMeshPartialWithRelationsSchema: z.ZodType<FaceMeshPartialWithRelations> = FaceMeshPartialSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema).array(),
})).partial()

export default FaceMeshSchema;

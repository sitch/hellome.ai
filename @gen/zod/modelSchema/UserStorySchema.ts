import { z } from 'zod';
import type { StoryWithRelations } from './StorySchema'
import type { StoryPartialWithRelations } from './StorySchema'
import type { StoryOptionalDefaultsWithRelations } from './StorySchema'
import { StoryWithRelationsSchema } from './StorySchema'
import { StoryPartialWithRelationsSchema } from './StorySchema'
import { StoryOptionalDefaultsWithRelationsSchema } from './StorySchema'

/////////////////////////////////////////
// USER STORY SCHEMA
/////////////////////////////////////////

export const UserStorySchema = z.object({
  id: z.string().cuid(),
  storyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserStory = z.infer<typeof UserStorySchema>

/////////////////////////////////////////
// USER STORY PARTIAL SCHEMA
/////////////////////////////////////////

export const UserStoryPartialSchema = UserStorySchema.partial()

export type UserStoryPartial = z.infer<typeof UserStoryPartialSchema>

/////////////////////////////////////////
// USER STORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserStoryOptionalDefaultsSchema = UserStorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserStoryOptionalDefaults = z.infer<typeof UserStoryOptionalDefaultsSchema>

/////////////////////////////////////////
// USER STORY RELATION SCHEMA
/////////////////////////////////////////

export type UserStoryRelations = {
  story: StoryWithRelations;
};

export type UserStoryWithRelations = z.infer<typeof UserStorySchema> & UserStoryRelations

export const UserStoryWithRelationsSchema: z.ZodType<UserStoryWithRelations> = UserStorySchema.merge(z.object({
  story: z.lazy(() => StoryWithRelationsSchema),
}))

/////////////////////////////////////////
// USER STORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserStoryOptionalDefaultsRelations = {
  story: StoryOptionalDefaultsWithRelations;
};

export type UserStoryOptionalDefaultsWithRelations = z.infer<typeof UserStoryOptionalDefaultsSchema> & UserStoryOptionalDefaultsRelations

export const UserStoryOptionalDefaultsWithRelationsSchema: z.ZodType<UserStoryOptionalDefaultsWithRelations> = UserStoryOptionalDefaultsSchema.merge(z.object({
  story: z.lazy(() => StoryOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// USER STORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserStoryPartialRelations = {
  story?: StoryPartialWithRelations;
};

export type UserStoryPartialWithRelations = z.infer<typeof UserStoryPartialSchema> & UserStoryPartialRelations

export const UserStoryPartialWithRelationsSchema: z.ZodType<UserStoryPartialWithRelations> = UserStoryPartialSchema.merge(z.object({
  story: z.lazy(() => StoryPartialWithRelationsSchema),
})).partial()

export default UserStorySchema;

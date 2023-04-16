import { z } from 'zod';

/////////////////////////////////////////
// STORY SCHEMA
/////////////////////////////////////////

export const StorySchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Story = z.infer<typeof StorySchema>

/////////////////////////////////////////
// STORY PARTIAL SCHEMA
/////////////////////////////////////////

export const StoryPartialSchema = StorySchema.partial()

export type StoryPartial = z.infer<typeof StoryPartialSchema>

/////////////////////////////////////////
// STORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StoryOptionalDefaultsSchema = StorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type StoryOptionalDefaults = z.infer<typeof StoryOptionalDefaultsSchema>

/////////////////////////////////////////
// STORY RELATION SCHEMA
/////////////////////////////////////////

export type StoryRelations = {
  UserStory: UserStoryWithRelations[];
};

export type StoryWithRelations = z.infer<typeof StorySchema> & StoryRelations

export const StoryWithRelationsSchema: z.ZodType<StoryWithRelations> = StorySchema.merge(z.object({
  UserStory: z.lazy(() => UserStoryWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// STORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type StoryOptionalDefaultsRelations = {
  UserStory: UserStoryOptionalDefaultsWithRelations[];
};

export type StoryOptionalDefaultsWithRelations = z.infer<typeof StoryOptionalDefaultsSchema> & StoryOptionalDefaultsRelations

export const StoryOptionalDefaultsWithRelationsSchema: z.ZodType<StoryOptionalDefaultsWithRelations> = StoryOptionalDefaultsSchema.merge(z.object({
  UserStory: z.lazy(() => UserStoryOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// STORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type StoryPartialRelations = {
  UserStory?: UserStoryPartialWithRelations[];
};

export type StoryPartialWithRelations = z.infer<typeof StoryPartialSchema> & StoryPartialRelations

export const StoryPartialWithRelationsSchema: z.ZodType<StoryPartialWithRelations> = StoryPartialSchema.merge(z.object({
  UserStory: z.lazy(() => UserStoryPartialWithRelationsSchema).array(),
})).partial()

export default StorySchema;

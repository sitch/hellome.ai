import { z } from 'zod';

/////////////////////////////////////////
// STORY SCHEMA
/////////////////////////////////////////

export const StorySchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullable(),
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
  id: z.number().int().optional(),
}))

export type StoryOptionalDefaults = z.infer<typeof StoryOptionalDefaultsSchema>

export default StorySchema;

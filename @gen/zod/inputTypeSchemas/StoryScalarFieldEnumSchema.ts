import { z } from 'zod';

export const StoryScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt']);

export default StoryScalarFieldEnumSchema;

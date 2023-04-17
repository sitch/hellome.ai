import { z } from 'zod';

export const StoryScalarFieldEnumSchema = z.enum(['id','email','name']);

export default StoryScalarFieldEnumSchema;

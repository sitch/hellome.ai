import { z } from 'zod';

export const UserStoryScalarFieldEnumSchema = z.enum(['id','storyId','createdAt','updatedAt']);

export default UserStoryScalarFieldEnumSchema;

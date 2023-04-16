import { z } from 'zod';

export const FamilyScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt']);

export default FamilyScalarFieldEnumSchema;

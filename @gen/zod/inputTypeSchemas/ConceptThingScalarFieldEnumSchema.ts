import { z } from 'zod';

export const ConceptThingScalarFieldEnumSchema = z.enum(['id','userId','familyId','createdAt','updatedAt']);

export default ConceptThingScalarFieldEnumSchema;

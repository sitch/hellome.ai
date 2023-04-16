import { z } from 'zod';

export const ConceptPlaceScalarFieldEnumSchema = z.enum(['id','userId','familyId','createdAt','updatedAt']);

export default ConceptPlaceScalarFieldEnumSchema;

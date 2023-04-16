import { z } from 'zod';

export const ConceptTensorScalarFieldEnumSchema = z.enum(['id','identifier','classNoun','classPrompt','instancePrompt','tensorUrl','createdAt','dreamBoothPredictionId']);

export default ConceptTensorScalarFieldEnumSchema;

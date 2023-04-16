import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','faceMeshId','name','nickname','birthdate','sex','gender','genderPronounSingluar','genderPronounPlural','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;

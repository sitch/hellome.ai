import { z } from 'zod';

export const SexSchema = z.enum(['MALE','FEMALE']);

export type SexType = `${z.infer<typeof SexSchema>}`

export default SexSchema;

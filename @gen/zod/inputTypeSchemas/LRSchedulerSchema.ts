import { z } from 'zod';

export const LRSchedulerSchema = z.enum(['linear','cosine','cosine_with_restarts','polynomial','constant','constant_with_warmup']);

export type LRSchedulerType = `${z.infer<typeof LRSchedulerSchema>}`

export default LRSchedulerSchema;

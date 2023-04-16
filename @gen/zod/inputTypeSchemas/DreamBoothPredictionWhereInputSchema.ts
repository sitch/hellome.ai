import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumLRSchedulerFilterSchema } from './EnumLRSchedulerFilterSchema';
import { LRSchedulerSchema } from './LRSchedulerSchema';
import { ConceptTensorListRelationFilterSchema } from './ConceptTensorListRelationFilterSchema';

export const DreamBoothPredictionWhereInputSchema: z.ZodType<Prisma.DreamBoothPredictionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DreamBoothPredictionWhereInputSchema),z.lazy(() => DreamBoothPredictionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DreamBoothPredictionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DreamBoothPredictionWhereInputSchema),z.lazy(() => DreamBoothPredictionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instance_prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class_prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instance_data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class_data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  num_class_images: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  save_sample_prompt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  save_sample_negative_prompt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  n_save_sample: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  save_guidance_scale: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  save_infer_steps: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  pad_tokens: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  with_prior_preservation: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  prior_loss_weight: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  seed: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  resolution: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  center_crop: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  train_text_encoder: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  train_batch_size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sample_batch_size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  num_train_epochs: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  max_train_steps: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gradient_accumulation_steps: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gradient_checkpointing: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  learning_rate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  scale_lr: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  lr_scheduler: z.union([ z.lazy(() => EnumLRSchedulerFilterSchema),z.lazy(() => LRSchedulerSchema) ]).optional(),
  lr_warmup_steps: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  use_8bit_adam: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  adam_beta1: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  adam_beta2: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  adam_weight_decay: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  adam_epsilon: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  max_grad_norm: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  ConceptTensor: z.lazy(() => ConceptTensorListRelationFilterSchema).optional()
}).strict();

export default DreamBoothPredictionWhereInputSchema;

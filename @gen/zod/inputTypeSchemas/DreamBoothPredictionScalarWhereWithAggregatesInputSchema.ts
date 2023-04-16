import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumLRSchedulerWithAggregatesFilterSchema } from './EnumLRSchedulerWithAggregatesFilterSchema';
import { LRSchedulerSchema } from './LRSchedulerSchema';

export const DreamBoothPredictionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DreamBoothPredictionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DreamBoothPredictionScalarWhereWithAggregatesInputSchema),z.lazy(() => DreamBoothPredictionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DreamBoothPredictionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DreamBoothPredictionScalarWhereWithAggregatesInputSchema),z.lazy(() => DreamBoothPredictionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  instance_prompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  class_prompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  instance_data: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  class_data: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  num_class_images: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  save_sample_prompt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  save_sample_negative_prompt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  n_save_sample: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  save_guidance_scale: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  save_infer_steps: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  pad_tokens: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  with_prior_preservation: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  prior_loss_weight: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  seed: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  resolution: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  center_crop: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  train_text_encoder: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  train_batch_size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sample_batch_size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  num_train_epochs: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  max_train_steps: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  gradient_accumulation_steps: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  gradient_checkpointing: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  learning_rate: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  scale_lr: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  lr_scheduler: z.union([ z.lazy(() => EnumLRSchedulerWithAggregatesFilterSchema),z.lazy(() => LRSchedulerSchema) ]).optional(),
  lr_warmup_steps: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  use_8bit_adam: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  adam_beta1: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  adam_beta2: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  adam_weight_decay: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  adam_epsilon: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  max_grad_norm: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default DreamBoothPredictionScalarWhereWithAggregatesInputSchema;

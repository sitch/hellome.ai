import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';
import { ConceptTensorCreateNestedManyWithoutPredictionInputSchema } from './ConceptTensorCreateNestedManyWithoutPredictionInputSchema';

export const DreamBoothPredictionCreateInputSchema: z.ZodType<Prisma.DreamBoothPredictionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  instance_prompt: z.string(),
  class_prompt: z.string(),
  instance_data: z.string(),
  class_data: z.string(),
  num_class_images: z.number().int().optional(),
  save_sample_prompt: z.string().optional().nullable(),
  save_sample_negative_prompt: z.string().optional().nullable(),
  n_save_sample: z.number().int().optional(),
  save_guidance_scale: z.number().optional(),
  save_infer_steps: z.number().int().optional(),
  pad_tokens: z.boolean().optional(),
  with_prior_preservation: z.boolean().optional(),
  prior_loss_weight: z.number().optional(),
  seed: z.number().int().optional(),
  resolution: z.number().int().optional(),
  center_crop: z.boolean().optional(),
  train_text_encoder: z.boolean().optional(),
  train_batch_size: z.number().int().optional(),
  sample_batch_size: z.number().int().optional(),
  num_train_epochs: z.number().int().optional(),
  max_train_steps: z.number().int().optional(),
  gradient_accumulation_steps: z.number().int().optional(),
  gradient_checkpointing: z.boolean().optional(),
  learning_rate: z.number().optional(),
  scale_lr: z.boolean().optional(),
  lr_scheduler: z.lazy(() => LRSchedulerSchema).optional(),
  lr_warmup_steps: z.number().int().optional(),
  use_8bit_adam: z.boolean().optional(),
  adam_beta1: z.number().optional(),
  adam_beta2: z.number().optional(),
  adam_weight_decay: z.number().optional(),
  adam_epsilon: z.number().optional(),
  max_grad_norm: z.number().optional(),
  ConceptTensor: z.lazy(() => ConceptTensorCreateNestedManyWithoutPredictionInputSchema).optional()
}).strict();

export default DreamBoothPredictionCreateInputSchema;

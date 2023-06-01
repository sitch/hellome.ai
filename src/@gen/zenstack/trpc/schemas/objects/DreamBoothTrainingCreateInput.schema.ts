/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { ConceptCreateNestedManyWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateNestedManyWithoutDreamboothTrainingInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingCreateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    instance_prompt: z.string(),
    class_prompt: z.string(),
    instance_data: z.string(),
    class_data: z.string(),
    num_class_images: z.number().optional(),
    save_sample_prompt: z.string().optional().nullable(),
    save_sample_negative_prompt: z.string().optional().nullable(),
    n_save_sample: z.number().optional(),
    save_guidance_scale: z.number().optional(),
    save_infer_steps: z.number().optional(),
    pad_tokens: z.boolean().optional(),
    with_prior_preservation: z.boolean().optional(),
    prior_loss_weight: z.number().optional(),
    seed: z.number().optional(),
    resolution: z.number().optional(),
    center_crop: z.boolean().optional(),
    train_text_encoder: z.boolean().optional(),
    train_batch_size: z.number().optional(),
    sample_batch_size: z.number().optional(),
    num_train_epochs: z.number().optional(),
    max_train_steps: z.number().optional(),
    gradient_accumulation_steps: z.number().optional(),
    gradient_checkpointing: z.boolean().optional(),
    learning_rate: z.number().optional(),
    scale_lr: z.boolean().optional(),
    lr_scheduler: z.lazy(() => LRSchedulerSchema).optional(),
    lr_warmup_steps: z.number().optional(),
    use_8bit_adam: z.boolean().optional(),
    adam_beta1: z.number().optional(),
    adam_beta2: z.number().optional(),
    adam_weight_decay: z.number().optional(),
    max_grad_norm: z.number().optional(),
    Concept: z
      .lazy(
        () => ConceptCreateNestedManyWithoutDreamboothTrainingInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const DreamBoothTrainingCreateInputObjectSchema = Schema

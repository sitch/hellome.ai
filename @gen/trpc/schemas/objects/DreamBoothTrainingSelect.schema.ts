import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptFindManySchema } from "../findManyConcept.schema"
import { DreamBoothTrainingCountOutputTypeArgsObjectSchema } from "./DreamBoothTrainingCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    instance_prompt: z.boolean().optional(),
    class_prompt: z.boolean().optional(),
    instance_data: z.boolean().optional(),
    class_data: z.boolean().optional(),
    num_class_images: z.boolean().optional(),
    save_sample_prompt: z.boolean().optional(),
    save_sample_negative_prompt: z.boolean().optional(),
    n_save_sample: z.boolean().optional(),
    save_guidance_scale: z.boolean().optional(),
    save_infer_steps: z.boolean().optional(),
    pad_tokens: z.boolean().optional(),
    with_prior_preservation: z.boolean().optional(),
    prior_loss_weight: z.boolean().optional(),
    seed: z.boolean().optional(),
    resolution: z.boolean().optional(),
    center_crop: z.boolean().optional(),
    train_text_encoder: z.boolean().optional(),
    train_batch_size: z.boolean().optional(),
    sample_batch_size: z.boolean().optional(),
    num_train_epochs: z.boolean().optional(),
    max_train_steps: z.boolean().optional(),
    gradient_accumulation_steps: z.boolean().optional(),
    gradient_checkpointing: z.boolean().optional(),
    learning_rate: z.boolean().optional(),
    scale_lr: z.boolean().optional(),
    lr_scheduler: z.boolean().optional(),
    lr_warmup_steps: z.boolean().optional(),
    use_8bit_adam: z.boolean().optional(),
    adam_beta1: z.boolean().optional(),
    adam_beta2: z.boolean().optional(),
    adam_weight_decay: z.boolean().optional(),
    adam_epsilon: z.boolean().optional(),
    max_grad_norm: z.boolean().optional(),
    Concept: z
      .union([z.boolean(), z.lazy(() => ConceptFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => DreamBoothTrainingCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DreamBoothTrainingSelectObjectSchema = Schema

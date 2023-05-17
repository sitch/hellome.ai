import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.DreamBoothTrainingSumAggregateInputType> = z
  .object({
    num_class_images: z.literal(true).optional(),
    n_save_sample: z.literal(true).optional(),
    save_guidance_scale: z.literal(true).optional(),
    save_infer_steps: z.literal(true).optional(),
    prior_loss_weight: z.literal(true).optional(),
    seed: z.literal(true).optional(),
    resolution: z.literal(true).optional(),
    train_batch_size: z.literal(true).optional(),
    sample_batch_size: z.literal(true).optional(),
    num_train_epochs: z.literal(true).optional(),
    max_train_steps: z.literal(true).optional(),
    gradient_accumulation_steps: z.literal(true).optional(),
    learning_rate: z.literal(true).optional(),
    lr_warmup_steps: z.literal(true).optional(),
    adam_beta1: z.literal(true).optional(),
    adam_beta2: z.literal(true).optional(),
    adam_weight_decay: z.literal(true).optional(),
    adam_epsilon: z.literal(true).optional(),
    max_grad_norm: z.literal(true).optional(),
  })
  .strict()

export const DreamBoothTrainingSumAggregateInputObjectSchema = Schema

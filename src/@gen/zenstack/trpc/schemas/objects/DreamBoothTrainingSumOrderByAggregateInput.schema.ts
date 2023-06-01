/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingSumOrderByAggregateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    num_class_images: z.lazy(() => SortOrderSchema).optional(),
    n_save_sample: z.lazy(() => SortOrderSchema).optional(),
    save_guidance_scale: z.lazy(() => SortOrderSchema).optional(),
    save_infer_steps: z.lazy(() => SortOrderSchema).optional(),
    prior_loss_weight: z.lazy(() => SortOrderSchema).optional(),
    seed: z.lazy(() => SortOrderSchema).optional(),
    resolution: z.lazy(() => SortOrderSchema).optional(),
    train_batch_size: z.lazy(() => SortOrderSchema).optional(),
    sample_batch_size: z.lazy(() => SortOrderSchema).optional(),
    num_train_epochs: z.lazy(() => SortOrderSchema).optional(),
    max_train_steps: z.lazy(() => SortOrderSchema).optional(),
    gradient_accumulation_steps: z.lazy(() => SortOrderSchema).optional(),
    learning_rate: z.lazy(() => SortOrderSchema).optional(),
    lr_warmup_steps: z.lazy(() => SortOrderSchema).optional(),
    adam_beta1: z.lazy(() => SortOrderSchema).optional(),
    adam_beta2: z.lazy(() => SortOrderSchema).optional(),
    adam_weight_decay: z.lazy(() => SortOrderSchema).optional(),
    max_grad_norm: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DreamBoothTrainingSumOrderByAggregateInputObjectSchema = Schema

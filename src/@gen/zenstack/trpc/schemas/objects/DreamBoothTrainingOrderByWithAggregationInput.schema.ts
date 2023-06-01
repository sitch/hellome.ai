/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DreamBoothTrainingAvgOrderByAggregateInputObjectSchema } from "./DreamBoothTrainingAvgOrderByAggregateInput.schema"
import { DreamBoothTrainingCountOrderByAggregateInputObjectSchema } from "./DreamBoothTrainingCountOrderByAggregateInput.schema"
import { DreamBoothTrainingMaxOrderByAggregateInputObjectSchema } from "./DreamBoothTrainingMaxOrderByAggregateInput.schema"
import { DreamBoothTrainingMinOrderByAggregateInputObjectSchema } from "./DreamBoothTrainingMinOrderByAggregateInput.schema"
import { DreamBoothTrainingSumOrderByAggregateInputObjectSchema } from "./DreamBoothTrainingSumOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    instance_prompt: z.lazy(() => SortOrderSchema).optional(),
    class_prompt: z.lazy(() => SortOrderSchema).optional(),
    instance_data: z.lazy(() => SortOrderSchema).optional(),
    class_data: z.lazy(() => SortOrderSchema).optional(),
    num_class_images: z.lazy(() => SortOrderSchema).optional(),
    save_sample_prompt: z.lazy(() => SortOrderSchema).optional(),
    save_sample_negative_prompt: z.lazy(() => SortOrderSchema).optional(),
    n_save_sample: z.lazy(() => SortOrderSchema).optional(),
    save_guidance_scale: z.lazy(() => SortOrderSchema).optional(),
    save_infer_steps: z.lazy(() => SortOrderSchema).optional(),
    pad_tokens: z.lazy(() => SortOrderSchema).optional(),
    with_prior_preservation: z.lazy(() => SortOrderSchema).optional(),
    prior_loss_weight: z.lazy(() => SortOrderSchema).optional(),
    seed: z.lazy(() => SortOrderSchema).optional(),
    resolution: z.lazy(() => SortOrderSchema).optional(),
    center_crop: z.lazy(() => SortOrderSchema).optional(),
    train_text_encoder: z.lazy(() => SortOrderSchema).optional(),
    train_batch_size: z.lazy(() => SortOrderSchema).optional(),
    sample_batch_size: z.lazy(() => SortOrderSchema).optional(),
    num_train_epochs: z.lazy(() => SortOrderSchema).optional(),
    max_train_steps: z.lazy(() => SortOrderSchema).optional(),
    gradient_accumulation_steps: z.lazy(() => SortOrderSchema).optional(),
    gradient_checkpointing: z.lazy(() => SortOrderSchema).optional(),
    learning_rate: z.lazy(() => SortOrderSchema).optional(),
    scale_lr: z.lazy(() => SortOrderSchema).optional(),
    lr_scheduler: z.lazy(() => SortOrderSchema).optional(),
    lr_warmup_steps: z.lazy(() => SortOrderSchema).optional(),
    use_8bit_adam: z.lazy(() => SortOrderSchema).optional(),
    adam_beta1: z.lazy(() => SortOrderSchema).optional(),
    adam_beta2: z.lazy(() => SortOrderSchema).optional(),
    adam_weight_decay: z.lazy(() => SortOrderSchema).optional(),
    max_grad_norm: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DreamBoothTrainingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DreamBoothTrainingAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DreamBoothTrainingMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DreamBoothTrainingMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DreamBoothTrainingSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const DreamBoothTrainingOrderByWithAggregationInputObjectSchema = Schema

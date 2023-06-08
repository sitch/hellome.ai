/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { ConceptListRelationFilterObjectSchema } from "./ConceptListRelationFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumLRSchedulerFilterObjectSchema } from "./EnumLRSchedulerFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingWhereInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DreamBoothTrainingWhereInputObjectSchema),
        z.lazy(() => DreamBoothTrainingWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DreamBoothTrainingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DreamBoothTrainingWhereInputObjectSchema),
        z.lazy(() => DreamBoothTrainingWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    instance_prompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    class_prompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    instance_data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    class_data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    num_class_images: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    save_sample_prompt: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    save_sample_negative_prompt: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    n_save_sample: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    save_guidance_scale: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    save_infer_steps: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    pad_tokens: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    with_prior_preservation: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    prior_loss_weight: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    seed: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    resolution: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    center_crop: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    train_text_encoder: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    train_batch_size: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sample_batch_size: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    num_train_epochs: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    max_train_steps: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    gradient_accumulation_steps: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    gradient_checkpointing: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    learning_rate: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    scale_lr: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    lr_scheduler: z
      .union([
        z.lazy(() => EnumLRSchedulerFilterObjectSchema),
        z.lazy(() => LRSchedulerSchema),
      ])
      .optional(),
    lr_warmup_steps: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    use_8bit_adam: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    adam_beta1: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    adam_beta2: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    adam_weight_decay: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    adam_epsilon: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    max_grad_norm: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    Concept: z.lazy(() => ConceptListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const DreamBoothTrainingWhereInputObjectSchema = Schema

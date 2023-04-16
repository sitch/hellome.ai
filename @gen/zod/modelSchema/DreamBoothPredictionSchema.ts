import { z } from 'zod';
import { LRSchedulerSchema } from '../inputTypeSchemas/LRSchedulerSchema'
import type { ConceptTensorWithRelations } from './ConceptTensorSchema'
import type { ConceptTensorPartialWithRelations } from './ConceptTensorSchema'
import type { ConceptTensorOptionalDefaultsWithRelations } from './ConceptTensorSchema'
import { ConceptTensorWithRelationsSchema } from './ConceptTensorSchema'
import { ConceptTensorPartialWithRelationsSchema } from './ConceptTensorSchema'
import { ConceptTensorOptionalDefaultsWithRelationsSchema } from './ConceptTensorSchema'

/////////////////////////////////////////
// DREAM BOOTH PREDICTION SCHEMA
/////////////////////////////////////////

/**
 * There are a few inputs you should know about when training with this model:
 * 
 * - `instance_data`   (required) - A ZIP file containing your training images (JPG, PNG, etc. size not restricted). These images contain your "subject" that you want the trained model to embed in the output domain for later generating customised scenes beyond the training images. For best results, use images without noise or unrelated object in the background.
 * - `instance_prompt` (required) - This is the prompt you use to describe your training images, in the format: `a [identifier] [class noun]`, where the `[identifier]` should be a rare-token - it is found that relatively short sequences with 1-3 letters work the best (e.g. `sks`, `xjy`). `[class noun]` is a coarse class descriptor of the subject (e.g. cat, dog, watch, etc.). For example, your `instance_prompt` can be: `a sks dog`, or with some extra description `a photo of a xjy dog`. The trained model will learn to bind a unique identifier with your specific subject in the `instance_data`.
 * - `class_prompt`    (required) - This is the prompt or description of the coarse class of your training images, in the format of `a [class noun]` (or with some extra description).  `class_prompt` is used to alleviate overfitting to your customised images (the trained model should still keep the learnt prior so that it can still generate different dogs when the `[identifier]` is not in the prompt). Corresponding to the examples of the `instant_prompt` above, the `class_prompt` can be `a dog` or `a photo of a dog`.
 * - `class_data`      (optional) - This corresponds to `class_prompt` above, also with the purpose to keep the generalisability of the model. By default, the pretrained stable-diffusion model will generate N (determined by the `num_class_images` you set) images based on the `class_prompt` provided above. But to save time or to to have your preferred specific set of `class_data`, you can also provide them in a ZIP file.
 * 
 * You may also want to change `num_class_images` and the `max_train_steps` settings, to trade-off speed and quality.
 * 
 * `seed` is randomly initialised to 1337, feel free to change it!
 * 
 */
export const DreamBoothPredictionSchema = z.object({
  /**
   * The scheduler type to use
   */
  lr_scheduler: LRSchedulerSchema,
  id: z.string().cuid(),
  /**
   * The prompt you use to describe your training images, in the format: `a [identifier] [class noun]`, where the `[identifier]` should be a rare token. Relatively short sequences with 1-3 letters work the best (e.g. `sks`, `xjy`). `[class noun]` is a coarse class descriptor of the subject (e.g. cat, dog, watch, etc.). For example, your `instance_prompt` can be `a sks dog`, or with some extra description `a photo of a sks dog`. The trained model will learn to bind a unique identifier with your specific subject in the `instance_data`.
   */
  instance_prompt: z.string(),
  /**
   * The prompt or description of the coarse class of your training images, in the format of `a [class noun]`, optionally with some extra description. `class_prompt` is used to alleviate overfitting to your customised images (the trained model should still keep the learnt prior so that it can still generate different dogs when the `[identifier]` is not in the prompt). Corresponding to the examples of the `instant_prompt` above, the `class_prompt` can be `a dog` or `a photo of a dog`.
   */
  class_prompt: z.string(),
  /**
   * A ZIP file containing your training images (JPG, PNG, etc. size not restricted). These images contain your 'subject' that you want the trained model to embed in the output domain for later generating customized scenes beyond the training images. For best results, use images without noise or unrelated objects in the background.
   */
  instance_data: z.string(),
  /**
   * An optional ZIP file containing the training data of class images. This corresponds to `class_prompt` above, also with the purpose of keeping the model generalizable. By default, the pretrained stable-diffusion model will generate N images (determined by the `num_class_images` you set) based on the `class_prompt` provided. But to save time or to have your preferred specific set of `class_data`, you can also provide them in a ZIP file.
   */
  class_data: z.string(),
  /**
   * Minimal class images for prior preservation loss. If not enough images are provided in class_data, additional images will be sampled with class_prompt.
   */
  num_class_images: z.number().int(),
  /**
   * The prompt used to generate sample outputs to save.
   */
  save_sample_prompt: z.string().nullable(),
  /**
   * The negative prompt used to generate sample outputs to save.
   */
  save_sample_negative_prompt: z.string().nullable(),
  /**
   * The number of samples to save.
   */
  n_save_sample: z.number().int(),
  /**
   * CFG for save sample.
   */
  save_guidance_scale: z.number(),
  /**
   * The number of inference steps for save sample.
   */
  save_infer_steps: z.number().int(),
  /**
   * Flag to pad tokens to length 77.
   */
  pad_tokens: z.boolean(),
  /**
   * Flag to add prior preservation loss.
   */
  with_prior_preservation: z.boolean(),
  /**
   * Weight of prior preservation loss.
   */
  prior_loss_weight: z.number(),
  /**
   * A seed for reproducible training
   */
  seed: z.number().int(),
  /**
   * The resolution for input images. All the images in the train/validation dataset will be resized to this resolution.
   */
  resolution: z.number().int(),
  /**
   * Whether to center crop images before resizing to resolution
   */
  center_crop: z.boolean(),
  /**
   * Whether to train the text encoder
   */
  train_text_encoder: z.boolean(),
  /**
   * Batch size (per device) for the training dataloader.
   */
  train_batch_size: z.number().int(),
  /**
   * Batch size (per device) for sampling images.
   */
  sample_batch_size: z.number().int(),
  /**
   * Number of training epochs
   */
  num_train_epochs: z.number().int(),
  /**
   * Total number of training steps to perform.  If provided, overrides num_train_epochs.
   */
  max_train_steps: z.number().int(),
  /**
   * Number of updates steps to accumulate before performing a backward/update pass.
   */
  gradient_accumulation_steps: z.number().int(),
  /**
   * Whether or not to use gradient checkpointing to save memory at the expense of slower backward pass.
   */
  gradient_checkpointing: z.boolean(),
  /**
   * Initial learning rate (after the potential warmup period) to use.
   */
  learning_rate: z.number(),
  /**
   * Scale the learning rate by the number of GPUs, gradient accumulation steps, and batch size.
   */
  scale_lr: z.boolean(),
  /**
   * Number of steps for the warmup in the lr scheduler.
   */
  lr_warmup_steps: z.number().int(),
  /**
   * Whether or not to use 8-bit Adam from bitsandbytes.
   */
  use_8bit_adam: z.boolean(),
  /**
   * The beta1 parameter for the Adam optimizer.
   */
  adam_beta1: z.number(),
  /**
   * The beta2 parameter for the Adam optimizer.
   */
  adam_beta2: z.number(),
  /**
   * Weight decay to use
   */
  adam_weight_decay: z.number(),
  /**
   * Epsilon value for the Adam optimizer
   */
  adam_epsilon: z.number(),
  /**
   * Max gradient norm.
   */
  max_grad_norm: z.number(),
})

export type DreamBoothPrediction = z.infer<typeof DreamBoothPredictionSchema>

/////////////////////////////////////////
// DREAM BOOTH PREDICTION PARTIAL SCHEMA
/////////////////////////////////////////

export const DreamBoothPredictionPartialSchema = DreamBoothPredictionSchema.partial()

export type DreamBoothPredictionPartial = z.infer<typeof DreamBoothPredictionPartialSchema>

/////////////////////////////////////////
// DREAM BOOTH PREDICTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DreamBoothPredictionOptionalDefaultsSchema = DreamBoothPredictionSchema.merge(z.object({
  /**
   * The scheduler type to use
   */
  lr_scheduler: LRSchedulerSchema.optional(),
  id: z.string().cuid().optional(),
  /**
   * Minimal class images for prior preservation loss. If not enough images are provided in class_data, additional images will be sampled with class_prompt.
   */
  num_class_images: z.number().int().optional(),
  /**
   * The number of samples to save.
   */
  n_save_sample: z.number().int().optional(),
  /**
   * CFG for save sample.
   */
  save_guidance_scale: z.number().optional(),
  /**
   * The number of inference steps for save sample.
   */
  save_infer_steps: z.number().int().optional(),
  /**
   * Flag to pad tokens to length 77.
   */
  pad_tokens: z.boolean().optional(),
  /**
   * Flag to add prior preservation loss.
   */
  with_prior_preservation: z.boolean().optional(),
  /**
   * Weight of prior preservation loss.
   */
  prior_loss_weight: z.number().optional(),
  /**
   * A seed for reproducible training
   */
  seed: z.number().int().optional(),
  /**
   * The resolution for input images. All the images in the train/validation dataset will be resized to this resolution.
   */
  resolution: z.number().int().optional(),
  /**
   * Whether to center crop images before resizing to resolution
   */
  center_crop: z.boolean().optional(),
  /**
   * Whether to train the text encoder
   */
  train_text_encoder: z.boolean().optional(),
  /**
   * Batch size (per device) for the training dataloader.
   */
  train_batch_size: z.number().int().optional(),
  /**
   * Batch size (per device) for sampling images.
   */
  sample_batch_size: z.number().int().optional(),
  /**
   * Number of training epochs
   */
  num_train_epochs: z.number().int().optional(),
  /**
   * Total number of training steps to perform.  If provided, overrides num_train_epochs.
   */
  max_train_steps: z.number().int().optional(),
  /**
   * Number of updates steps to accumulate before performing a backward/update pass.
   */
  gradient_accumulation_steps: z.number().int().optional(),
  /**
   * Whether or not to use gradient checkpointing to save memory at the expense of slower backward pass.
   */
  gradient_checkpointing: z.boolean().optional(),
  /**
   * Initial learning rate (after the potential warmup period) to use.
   */
  learning_rate: z.number().optional(),
  /**
   * Scale the learning rate by the number of GPUs, gradient accumulation steps, and batch size.
   */
  scale_lr: z.boolean().optional(),
  /**
   * Number of steps for the warmup in the lr scheduler.
   */
  lr_warmup_steps: z.number().int().optional(),
  /**
   * Whether or not to use 8-bit Adam from bitsandbytes.
   */
  use_8bit_adam: z.boolean().optional(),
  /**
   * The beta1 parameter for the Adam optimizer.
   */
  adam_beta1: z.number().optional(),
  /**
   * The beta2 parameter for the Adam optimizer.
   */
  adam_beta2: z.number().optional(),
  /**
   * Weight decay to use
   */
  adam_weight_decay: z.number().optional(),
  /**
   * Epsilon value for the Adam optimizer
   */
  adam_epsilon: z.number().optional(),
  /**
   * Max gradient norm.
   */
  max_grad_norm: z.number().optional(),
}))

export type DreamBoothPredictionOptionalDefaults = z.infer<typeof DreamBoothPredictionOptionalDefaultsSchema>

/////////////////////////////////////////
// DREAM BOOTH PREDICTION RELATION SCHEMA
/////////////////////////////////////////

export type DreamBoothPredictionRelations = {
  ConceptTensor: ConceptTensorWithRelations[];
};

export type DreamBoothPredictionWithRelations = z.infer<typeof DreamBoothPredictionSchema> & DreamBoothPredictionRelations

export const DreamBoothPredictionWithRelationsSchema: z.ZodType<DreamBoothPredictionWithRelations> = DreamBoothPredictionSchema.merge(z.object({
  ConceptTensor: z.lazy(() => ConceptTensorWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DREAM BOOTH PREDICTION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type DreamBoothPredictionOptionalDefaultsRelations = {
  ConceptTensor: ConceptTensorOptionalDefaultsWithRelations[];
};

export type DreamBoothPredictionOptionalDefaultsWithRelations = z.infer<typeof DreamBoothPredictionOptionalDefaultsSchema> & DreamBoothPredictionOptionalDefaultsRelations

export const DreamBoothPredictionOptionalDefaultsWithRelationsSchema: z.ZodType<DreamBoothPredictionOptionalDefaultsWithRelations> = DreamBoothPredictionOptionalDefaultsSchema.merge(z.object({
  ConceptTensor: z.lazy(() => ConceptTensorOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DREAM BOOTH PREDICTION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DreamBoothPredictionPartialRelations = {
  ConceptTensor?: ConceptTensorPartialWithRelations[];
};

export type DreamBoothPredictionPartialWithRelations = z.infer<typeof DreamBoothPredictionPartialSchema> & DreamBoothPredictionPartialRelations

export const DreamBoothPredictionPartialWithRelationsSchema: z.ZodType<DreamBoothPredictionPartialWithRelations> = DreamBoothPredictionPartialSchema.merge(z.object({
  ConceptTensor: z.lazy(() => ConceptTensorPartialWithRelationsSchema).array(),
})).partial()

export default DreamBoothPredictionSchema;

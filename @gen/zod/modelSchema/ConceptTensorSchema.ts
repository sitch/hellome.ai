import { z } from 'zod';
import type { DreamBoothPredictionWithRelations } from './DreamBoothPredictionSchema'
import type { DreamBoothPredictionPartialWithRelations } from './DreamBoothPredictionSchema'
import type { DreamBoothPredictionOptionalDefaultsWithRelations } from './DreamBoothPredictionSchema'
import { DreamBoothPredictionWithRelationsSchema } from './DreamBoothPredictionSchema'
import { DreamBoothPredictionPartialWithRelationsSchema } from './DreamBoothPredictionSchema'
import { DreamBoothPredictionOptionalDefaultsWithRelationsSchema } from './DreamBoothPredictionSchema'

/////////////////////////////////////////
// CONCEPT TENSOR SCHEMA
/////////////////////////////////////////

/**
 * - `instance_data` (required) - A ZIP file containing your training images (JPG, PNG, etc. size not restricted). These images contain your "subject" that you want the trained model to embed in the output domain for later generating customised scenes beyond the training images. For best results, use images without noise or unrelated object in the background.
 * - `instance_prompt` (required) - This is the prompt you use to describe your training images, in the format: `a [identifier] [class noun]`, where the `[identifier]` should be a rare-token - it is found that relatively short sequences with 1-3 letters work the best (e.g. `sks`, `xjy`). `[class noun]` is a coarse class descriptor of the subject (e.g. cat, dog, watch, etc.). For example, your `instance_prompt` can be: `a sks dog`, or with some extra description `a photo of a xjy dog`. The trained model will learn to bind a unique identifier with your specific subject in the `instance_data`.
 * - `class_prompt` (required) - This is the prompt or description of the coarse class of your training images, in the format of `a [class noun]` (or with some extra description).  `class_prompt` is used to alleviate overfitting to your customised images (the trained model should still keep the learnt prior so that it can still generate different dogs when the `[identifier]` is not in the prompt). Corresponding to the examples of the `instant_prompt` above, the `class_prompt` can be `a dog` or `a photo of a dog`.
 * - `class_data` (optional). This corresponds to `class_prompt` above, also with the purpose to keep the generalisability of the model. By default, the pretrained stable-diffusion model will generate N (determined by the `num_class_images` you set) images based on the `class_prompt` provided above. But to save time or to to have your preferred specific set of `class_data`, you can also provide them in a ZIP file.
 * 
 * You may also want to change `num_class_images` and the `max_train_steps` settings, to trade-off speed and quality.
 * `seed` is randomly initialised to 1337, feel free to change it!
 */
export const ConceptTensorSchema = z.object({
  id: z.string().cuid(),
  identifier: z.string(),
  classNoun: z.string(),
  classPrompt: z.string(),
  instancePrompt: z.string(),
  tensorUrl: z.string(),
  createdAt: z.coerce.date(),
  dreamBoothPredictionId: z.string(),
})

export type ConceptTensor = z.infer<typeof ConceptTensorSchema>

/////////////////////////////////////////
// CONCEPT TENSOR PARTIAL SCHEMA
/////////////////////////////////////////

export const ConceptTensorPartialSchema = ConceptTensorSchema.partial()

export type ConceptTensorPartial = z.infer<typeof ConceptTensorPartialSchema>

/////////////////////////////////////////
// CONCEPT TENSOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ConceptTensorOptionalDefaultsSchema = ConceptTensorSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type ConceptTensorOptionalDefaults = z.infer<typeof ConceptTensorOptionalDefaultsSchema>

/////////////////////////////////////////
// CONCEPT TENSOR RELATION SCHEMA
/////////////////////////////////////////

export type ConceptTensorRelations = {
  prediction: DreamBoothPredictionWithRelations;
};

export type ConceptTensorWithRelations = z.infer<typeof ConceptTensorSchema> & ConceptTensorRelations

export const ConceptTensorWithRelationsSchema: z.ZodType<ConceptTensorWithRelations> = ConceptTensorSchema.merge(z.object({
  prediction: z.lazy(() => DreamBoothPredictionWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT TENSOR OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ConceptTensorOptionalDefaultsRelations = {
  prediction: DreamBoothPredictionOptionalDefaultsWithRelations;
};

export type ConceptTensorOptionalDefaultsWithRelations = z.infer<typeof ConceptTensorOptionalDefaultsSchema> & ConceptTensorOptionalDefaultsRelations

export const ConceptTensorOptionalDefaultsWithRelationsSchema: z.ZodType<ConceptTensorOptionalDefaultsWithRelations> = ConceptTensorOptionalDefaultsSchema.merge(z.object({
  prediction: z.lazy(() => DreamBoothPredictionOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT TENSOR PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConceptTensorPartialRelations = {
  prediction?: DreamBoothPredictionPartialWithRelations;
};

export type ConceptTensorPartialWithRelations = z.infer<typeof ConceptTensorPartialSchema> & ConceptTensorPartialRelations

export const ConceptTensorPartialWithRelationsSchema: z.ZodType<ConceptTensorPartialWithRelations> = ConceptTensorPartialSchema.merge(z.object({
  prediction: z.lazy(() => DreamBoothPredictionPartialWithRelationsSchema),
})).partial()

export default ConceptTensorSchema;

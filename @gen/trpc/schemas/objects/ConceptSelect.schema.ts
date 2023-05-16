import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoFindManySchema } from "../findManyPhoto.schema"
import { ConceptCountOutputTypeArgsObjectSchema } from "./ConceptCountOutputTypeArgs.schema"
import { DreamBoothTrainingArgsObjectSchema } from "./DreamBoothTrainingArgs.schema"

const Schema: z.ZodType<Prisma.ConceptSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    description: z.boolean().optional(),
    prompt: z.boolean().optional(),
    identifier: z.boolean().optional(),
    classNoun: z.boolean().optional(),
    negativePrompt: z.boolean().optional(),
    instancePrompt: z.boolean().optional(),
    classPrompt: z.boolean().optional(),
    positivePrompts: z.boolean().optional(),
    negativePrompts: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    dreamboothTrainingId: z.boolean().optional(),
    dreamboothTraining: z
      .union([z.boolean(), z.lazy(() => DreamBoothTrainingArgsObjectSchema)])
      .optional(),
    dreamboothModelURI: z.boolean().optional(),
    photos: z
      .union([z.boolean(), z.lazy(() => PhotoFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ConceptCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ConceptSelectObjectSchema = Schema

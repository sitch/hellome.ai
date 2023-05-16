import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { ConceptCreatenegativePromptsInputObjectSchema } from "./ConceptCreatenegativePromptsInput.schema"
import { ConceptCreatepositivePromptsInputObjectSchema } from "./ConceptCreatepositivePromptsInput.schema"

const Schema: z.ZodType<Prisma.ConceptUncheckedCreateWithoutPhotosInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => ConceptTypeSchema),
    status: z.lazy(() => ConceptStatusSchema).optional(),
    description: z.string().optional().nullable(),
    prompt: z.string(),
    identifier: z.string(),
    classNoun: z.string(),
    negativePrompt: z.string(),
    instancePrompt: z.string(),
    classPrompt: z.string(),
    positivePrompts: z
      .union([
        z.lazy(() => ConceptCreatepositivePromptsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    negativePrompts: z
      .union([
        z.lazy(() => ConceptCreatenegativePromptsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    dreamboothTrainingId: z.string().optional().nullable(),
    dreamboothModelURI: z.string().optional().nullable(),
  })
  .strict()

export const ConceptUncheckedCreateWithoutPhotosInputObjectSchema = Schema

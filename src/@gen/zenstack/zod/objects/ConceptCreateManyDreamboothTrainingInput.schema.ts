/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { ConceptCreatenegativePromptsInputObjectSchema } from "./ConceptCreatenegativePromptsInput.schema"
import { ConceptCreatepositivePromptsInputObjectSchema } from "./ConceptCreatepositivePromptsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCreateManyDreamboothTrainingInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
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
    dreamboothModelURI: z.string().optional().nullable(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
  })
  .strict()

export const ConceptCreateManyDreamboothTrainingInputObjectSchema = Schema

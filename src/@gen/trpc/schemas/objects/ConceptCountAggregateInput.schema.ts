import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ConceptCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    type: z.literal(true).optional(),
    status: z.literal(true).optional(),
    description: z.literal(true).optional(),
    prompt: z.literal(true).optional(),
    identifier: z.literal(true).optional(),
    classNoun: z.literal(true).optional(),
    negativePrompt: z.literal(true).optional(),
    instancePrompt: z.literal(true).optional(),
    classPrompt: z.literal(true).optional(),
    positivePrompts: z.literal(true).optional(),
    negativePrompts: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    dreamboothTrainingId: z.literal(true).optional(),
    dreamboothModelURI: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const ConceptCountAggregateInputObjectSchema = Schema

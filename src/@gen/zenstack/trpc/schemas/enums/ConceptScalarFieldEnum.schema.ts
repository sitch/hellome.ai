/* eslint-disable */
import { z } from "zod"

export const ConceptScalarFieldEnumSchema = z.enum([
  "name",
  "type",
  "status",
  "description",
  "prompt",
  "identifier",
  "classNoun",
  "negativePrompt",
  "instancePrompt",
  "classPrompt",
  "positivePrompts",
  "negativePrompts",
  "dreamboothTrainingId",
  "dreamboothModelURI",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

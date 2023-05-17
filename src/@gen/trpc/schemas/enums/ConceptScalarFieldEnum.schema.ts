import { z } from "zod"

export const ConceptScalarFieldEnumSchema = z.enum([
  "id",
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
  "createdAt",
  "updatedAt",
  "dreamboothTrainingId",
  "dreamboothModelURI",
])

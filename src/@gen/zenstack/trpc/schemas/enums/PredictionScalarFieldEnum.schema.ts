/* eslint-disable */
import { z } from "zod"

export const PredictionScalarFieldEnumSchema = z.enum([
  "id",
  "uuid",
  "input",
  "output",
  "status",
  "created_at",
  "started_at",
  "completed_at",
  "version",
  "metrics",
  "error",
  "logs",
])

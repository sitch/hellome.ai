import { z } from "zod"

export const PageTextTypeSchema = z.enum([
  "machine_generated",
  "machine_translated",
  "user_creative_work",
  "user_translated",
])

import { z } from "zod"

export const EditionScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "userId",
  "pdfId",
])

/* eslint-disable */
import { z } from "zod"

export const EditionScalarFieldEnumSchema = z.enum([
  "userId",
  "pdfId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

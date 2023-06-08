/* eslint-disable */
import { z } from "zod"

export const PDFScalarFieldEnumSchema = z.enum([
  "height",
  "width",
  "pages",
  "tags",
  "fileId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

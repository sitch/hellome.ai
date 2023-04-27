import { z } from "zod"

export const CloudFileScalarFieldEnumSchema = z.enum([
  "id",
  "resourceType",
  "filename",
  "size",
  "ext",
  "mime",
  "metadata",
  "path",
  "signature",
  "privacy",
  "createdAt",
])

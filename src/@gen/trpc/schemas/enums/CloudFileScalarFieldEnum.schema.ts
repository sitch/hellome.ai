import { z } from "zod"

export const CloudFileScalarFieldEnumSchema = z.enum([
  "id",
  "filename",
  "stem",
  "extension",
  "size",
  "mime",
  "resourceType",
  "metadata",
  "key",
  "bucket",
  "region",
  "publicUrl",
  "privacy",
  "createdAt",
  "updatedAt",
])

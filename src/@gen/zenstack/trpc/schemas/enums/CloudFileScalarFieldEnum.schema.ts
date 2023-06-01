/* eslint-disable */
import { z } from "zod"

export const CloudFileScalarFieldEnumSchema = z.enum([
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
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

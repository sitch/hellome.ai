import { z } from "zod"

export const PhotoScalarFieldEnumSchema = z.enum([
  "id",
  "height",
  "width",
  "tags",
  "createdAt",
  "fileId",
])

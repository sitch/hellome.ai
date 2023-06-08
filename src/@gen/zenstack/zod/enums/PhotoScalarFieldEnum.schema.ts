/* eslint-disable */
import { z } from "zod"

export const PhotoScalarFieldEnumSchema = z.enum([
  "height",
  "width",
  "tags",
  "fileId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

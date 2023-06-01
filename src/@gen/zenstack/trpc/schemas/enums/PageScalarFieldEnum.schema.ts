/* eslint-disable */
import { z } from "zod"

export const PageScalarFieldEnumSchema = z.enum([
  "status",
  "type",
  "pageNumber",
  "storyId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

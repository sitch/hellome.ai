import { z } from "zod"

export const PageTextScalarFieldEnumSchema = z.enum([
  "id",
  "status",
  "locale",
  "text",
  "type",
  "createdAt",
  "updatedAt",
  "pageId",
  "storyId",
  "authorId",
  "translatorId",
])

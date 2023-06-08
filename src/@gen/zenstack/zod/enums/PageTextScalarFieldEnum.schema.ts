/* eslint-disable */
import { z } from "zod"

export const PageTextScalarFieldEnumSchema = z.enum([
  "status",
  "locale",
  "text",
  "type",
  "pageId",
  "storyId",
  "authorId",
  "translatorId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

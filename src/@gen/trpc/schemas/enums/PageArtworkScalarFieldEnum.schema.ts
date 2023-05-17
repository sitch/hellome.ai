import { z } from "zod"

export const PageArtworkScalarFieldEnumSchema = z.enum([
  "id",
  "status",
  "createdAt",
  "updatedAt",
  "pageId",
  "storyId",
  "artistId",
  "photoId",
])

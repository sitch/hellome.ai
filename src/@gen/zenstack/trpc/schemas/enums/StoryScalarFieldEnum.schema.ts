/* eslint-disable */
import { z } from "zod"

export const StoryScalarFieldEnumSchema = z.enum([
  "artistId",
  "authorId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

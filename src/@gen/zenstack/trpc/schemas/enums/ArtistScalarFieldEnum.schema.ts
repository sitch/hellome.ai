/* eslint-disable */
import { z } from "zod"

export const ArtistScalarFieldEnumSchema = z.enum([
  "userId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

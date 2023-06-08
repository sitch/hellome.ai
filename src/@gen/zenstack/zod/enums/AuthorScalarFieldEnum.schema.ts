/* eslint-disable */
import { z } from "zod"

export const AuthorScalarFieldEnumSchema = z.enum([
  "userId",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

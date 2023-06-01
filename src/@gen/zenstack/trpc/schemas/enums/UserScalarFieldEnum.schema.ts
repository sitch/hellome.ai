/* eslint-disable */
import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "name",
  "email",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
])

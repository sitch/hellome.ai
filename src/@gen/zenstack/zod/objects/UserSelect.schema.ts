/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionSchema } from "../Edition.schema"
import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.UserSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    editions: z
      .union([z.boolean(), z.lazy(() => EditionSchema.findMany)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const UserSelectObjectSchema = Schema

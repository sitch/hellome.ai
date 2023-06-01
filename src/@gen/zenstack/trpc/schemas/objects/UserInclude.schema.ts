/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionSchema } from "../Edition.schema"
import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.UserInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    editions: z
      .union([z.boolean(), z.lazy(() => EditionSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema

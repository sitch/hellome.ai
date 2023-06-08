/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutStoriesInputObjectSchema } from "./AuthorCreateWithoutStoriesInput.schema"
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from "./AuthorUncheckedCreateWithoutStoriesInput.schema"
import { AuthorUncheckedUpdateWithoutStoriesInputObjectSchema } from "./AuthorUncheckedUpdateWithoutStoriesInput.schema"
import { AuthorUpdateWithoutStoriesInputObjectSchema } from "./AuthorUpdateWithoutStoriesInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUpsertWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => AuthorUpdateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedUpdateWithoutStoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorUpsertWithoutStoriesInputObjectSchema = Schema

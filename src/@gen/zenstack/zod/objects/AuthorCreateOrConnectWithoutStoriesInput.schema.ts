/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutStoriesInputObjectSchema } from "./AuthorCreateWithoutStoriesInput.schema"
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from "./AuthorUncheckedCreateWithoutStoriesInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateOrConnectWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutStoriesInputObjectSchema = Schema

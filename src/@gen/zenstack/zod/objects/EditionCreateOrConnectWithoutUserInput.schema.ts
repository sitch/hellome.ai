/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateWithoutUserInputObjectSchema } from "./EditionCreateWithoutUserInput.schema"
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from "./EditionUncheckedCreateWithoutUserInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateOrConnectWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const EditionCreateOrConnectWithoutUserInputObjectSchema = Schema

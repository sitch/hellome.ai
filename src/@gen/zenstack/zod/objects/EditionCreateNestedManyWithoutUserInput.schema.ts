/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateManyUserInputEnvelopeObjectSchema } from "./EditionCreateManyUserInputEnvelope.schema"
import { EditionCreateOrConnectWithoutUserInputObjectSchema } from "./EditionCreateOrConnectWithoutUserInput.schema"
import { EditionCreateWithoutUserInputObjectSchema } from "./EditionCreateWithoutUserInput.schema"
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from "./EditionUncheckedCreateWithoutUserInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateNestedManyWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EditionCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const EditionCreateNestedManyWithoutUserInputObjectSchema = Schema

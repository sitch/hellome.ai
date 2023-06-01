/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyStoryInputEnvelopeObjectSchema } from "./PageArtworkCreateManyStoryInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutStoryInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutStoryInput.schema"
import { PageArtworkCreateWithoutStoryInputObjectSchema } from "./PageArtworkCreateWithoutStoryInput.schema"
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutStoryInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUncheckedCreateNestedManyWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema).array(),
        z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema),
        z
          .lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputObjectSchema),
        z
          .lazy(() => PageArtworkCreateOrConnectWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageArtworkCreateManyStoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema =
  Schema

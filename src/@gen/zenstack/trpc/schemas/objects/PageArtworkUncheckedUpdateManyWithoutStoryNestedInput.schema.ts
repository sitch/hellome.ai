/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyStoryInputEnvelopeObjectSchema } from "./PageArtworkCreateManyStoryInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutStoryInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutStoryInput.schema"
import { PageArtworkCreateWithoutStoryInputObjectSchema } from "./PageArtworkCreateWithoutStoryInput.schema"
import { PageArtworkScalarWhereInputObjectSchema } from "./PageArtworkScalarWhereInput.schema"
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutStoryInput.schema"
import { PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema } from "./PageArtworkUpdateManyWithWhereWithoutStoryInput.schema"
import { PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from "./PageArtworkUpdateWithWhereUniqueWithoutStoryInput.schema"
import { PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from "./PageArtworkUpsertWithWhereUniqueWithoutStoryInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUncheckedUpdateManyWithoutStoryNestedInput,
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
    upsert: z
      .union([
        z.lazy(
          () => PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageArtworkCreateManyStoryInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageArtworkUncheckedUpdateManyWithoutStoryNestedInputObjectSchema =
  Schema

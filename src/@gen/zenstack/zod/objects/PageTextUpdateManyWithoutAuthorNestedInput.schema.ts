/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyAuthorInputEnvelopeObjectSchema } from "./PageTextCreateManyAuthorInputEnvelope.schema"
import { PageTextCreateOrConnectWithoutAuthorInputObjectSchema } from "./PageTextCreateOrConnectWithoutAuthorInput.schema"
import { PageTextCreateWithoutAuthorInputObjectSchema } from "./PageTextCreateWithoutAuthorInput.schema"
import { PageTextScalarWhereInputObjectSchema } from "./PageTextScalarWhereInput.schema"
import { PageTextUncheckedCreateWithoutAuthorInputObjectSchema } from "./PageTextUncheckedCreateWithoutAuthorInput.schema"
import { PageTextUpdateManyWithWhereWithoutAuthorInputObjectSchema } from "./PageTextUpdateManyWithWhereWithoutAuthorInput.schema"
import { PageTextUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from "./PageTextUpdateWithWhereUniqueWithoutAuthorInput.schema"
import { PageTextUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from "./PageTextUpsertWithWhereUniqueWithoutAuthorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUpdateManyWithoutAuthorNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PageTextCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PageTextUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
        ),
        z
          .lazy(
            () => PageTextUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageTextCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PageTextUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
        ),
        z
          .lazy(
            () => PageTextUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PageTextScalarWhereInputObjectSchema),
        z.lazy(() => PageTextScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageTextUpdateManyWithoutAuthorNestedInputObjectSchema = Schema

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyTranslatorInputEnvelopeObjectSchema } from "./PageTextCreateManyTranslatorInputEnvelope.schema"
import { PageTextCreateOrConnectWithoutTranslatorInputObjectSchema } from "./PageTextCreateOrConnectWithoutTranslatorInput.schema"
import { PageTextCreateWithoutTranslatorInputObjectSchema } from "./PageTextCreateWithoutTranslatorInput.schema"
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedCreateWithoutTranslatorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutTranslatorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
          z
            .lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema)
            .array(),
          z.lazy(
            () => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PageTextCreateOrConnectWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextCreateOrConnectWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageTextCreateManyTranslatorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageTextWhereUniqueInputObjectSchema),
          z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema =
  Schema

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyPageInputEnvelopeObjectSchema } from "./PageTextCreateManyPageInputEnvelope.schema"
import { PageTextCreateOrConnectWithoutPageInputObjectSchema } from "./PageTextCreateOrConnectWithoutPageInput.schema"
import { PageTextCreateWithoutPageInputObjectSchema } from "./PageTextCreateWithoutPageInput.schema"
import { PageTextUncheckedCreateWithoutPageInputObjectSchema } from "./PageTextUncheckedCreateWithoutPageInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutPageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageTextCreateWithoutPageInputObjectSchema),
          z.lazy(() => PageTextCreateWithoutPageInputObjectSchema).array(),
          z.lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema),
          z
            .lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageTextCreateOrConnectWithoutPageInputObjectSchema),
          z
            .lazy(() => PageTextCreateOrConnectWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageTextCreateManyPageInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageTextWhereUniqueInputObjectSchema),
          z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema =
  Schema

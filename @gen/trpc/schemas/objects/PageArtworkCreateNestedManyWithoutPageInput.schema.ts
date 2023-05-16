import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPageInputEnvelopeObjectSchema } from "./PageArtworkCreateManyPageInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutPageInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutPageInput.schema"
import { PageArtworkCreateWithoutPageInputObjectSchema } from "./PageArtworkCreateWithoutPageInput.schema"
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPageInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateNestedManyWithoutPageInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema),
        z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema).array(),
        z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema),
        z
          .lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputObjectSchema),
        z
          .lazy(() => PageArtworkCreateOrConnectWithoutPageInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageArtworkCreateManyPageInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageArtworkCreateNestedManyWithoutPageInputObjectSchema = Schema

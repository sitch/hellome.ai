import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPageInputEnvelopeObjectSchema } from "./PageArtworkCreateManyPageInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutPageInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutPageInput.schema"
import { PageArtworkCreateWithoutPageInputObjectSchema } from "./PageArtworkCreateWithoutPageInput.schema"
import { PageArtworkScalarWhereInputObjectSchema } from "./PageArtworkScalarWhereInput.schema"
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPageInput.schema"
import { PageArtworkUpdateManyWithWhereWithoutPageInputObjectSchema } from "./PageArtworkUpdateManyWithWhereWithoutPageInput.schema"
import { PageArtworkUpdateWithWhereUniqueWithoutPageInputObjectSchema } from "./PageArtworkUpdateWithWhereUniqueWithoutPageInput.schema"
import { PageArtworkUpsertWithWhereUniqueWithoutPageInputObjectSchema } from "./PageArtworkUpsertWithWhereUniqueWithoutPageInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutPageNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => PageArtworkUpsertWithWhereUniqueWithoutPageInputObjectSchema
        ),
        z
          .lazy(
            () => PageArtworkUpsertWithWhereUniqueWithoutPageInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageArtworkCreateManyPageInputEnvelopeObjectSchema)
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
          () => PageArtworkUpdateWithWhereUniqueWithoutPageInputObjectSchema
        ),
        z
          .lazy(
            () => PageArtworkUpdateWithWhereUniqueWithoutPageInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => PageArtworkUpdateManyWithWhereWithoutPageInputObjectSchema
        ),
        z
          .lazy(
            () => PageArtworkUpdateManyWithWhereWithoutPageInputObjectSchema
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

export const PageArtworkUpdateManyWithoutPageNestedInputObjectSchema = Schema

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPhotoInputEnvelopeObjectSchema } from "./PageArtworkCreateManyPhotoInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutPhotoInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutPhotoInput.schema"
import { PageArtworkCreateWithoutPhotoInputObjectSchema } from "./PageArtworkCreateWithoutPhotoInput.schema"
import { PageArtworkScalarWhereInputObjectSchema } from "./PageArtworkScalarWhereInput.schema"
import { PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPhotoInput.schema"
import { PageArtworkUpdateManyWithWhereWithoutPhotoInputObjectSchema } from "./PageArtworkUpdateManyWithWhereWithoutPhotoInput.schema"
import { PageArtworkUpdateWithWhereUniqueWithoutPhotoInputObjectSchema } from "./PageArtworkUpdateWithWhereUniqueWithoutPhotoInput.schema"
import { PageArtworkUpsertWithWhereUniqueWithoutPhotoInputObjectSchema } from "./PageArtworkUpsertWithWhereUniqueWithoutPhotoInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutPhotoNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageArtworkCreateWithoutPhotoInputObjectSchema),
        z.lazy(() => PageArtworkCreateWithoutPhotoInputObjectSchema).array(),
        z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema),
        z
          .lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputObjectSchema),
        z
          .lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageArtworkCreateManyPhotoInputEnvelopeObjectSchema)
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
          () => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => PageArtworkUpdateManyWithWhereWithoutPhotoInputObjectSchema,
        ),
        z
          .lazy(
            () => PageArtworkUpdateManyWithWhereWithoutPhotoInputObjectSchema,
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

export const PageArtworkUpdateManyWithoutPhotoNestedInputObjectSchema = Schema

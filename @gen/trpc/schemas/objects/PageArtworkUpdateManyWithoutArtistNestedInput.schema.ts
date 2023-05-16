import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyArtistInputEnvelopeObjectSchema } from "./PageArtworkCreateManyArtistInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutArtistInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutArtistInput.schema"
import { PageArtworkCreateWithoutArtistInputObjectSchema } from "./PageArtworkCreateWithoutArtistInput.schema"
import { PageArtworkScalarWhereInputObjectSchema } from "./PageArtworkScalarWhereInput.schema"
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutArtistInput.schema"
import { PageArtworkUpdateManyWithWhereWithoutArtistInputObjectSchema } from "./PageArtworkUpdateManyWithWhereWithoutArtistInput.schema"
import { PageArtworkUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from "./PageArtworkUpdateWithWhereUniqueWithoutArtistInput.schema"
import { PageArtworkUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from "./PageArtworkUpsertWithWhereUniqueWithoutArtistInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema),
          z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(
            () => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PageArtworkCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => PageArtworkCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PageArtworkUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PageArtworkUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageArtworkCreateManyArtistInputEnvelopeObjectSchema)
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
            () =>
              PageArtworkUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PageArtworkUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PageArtworkUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PageArtworkUpdateManyWithWhereWithoutArtistInputObjectSchema,
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

export const PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema = Schema

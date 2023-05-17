import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPhotoInputEnvelopeObjectSchema } from "./PageArtworkCreateManyPhotoInputEnvelope.schema"
import { PageArtworkCreateOrConnectWithoutPhotoInputObjectSchema } from "./PageArtworkCreateOrConnectWithoutPhotoInput.schema"
import { PageArtworkCreateWithoutPhotoInputObjectSchema } from "./PageArtworkCreateWithoutPhotoInput.schema"
import { PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPhotoInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutPhotoInput> =
  z
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
      createMany: z
        .lazy(() => PageArtworkCreateManyPhotoInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema =
  Schema

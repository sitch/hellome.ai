/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateWithoutPhotoInputObjectSchema } from "./PageArtworkCreateWithoutPhotoInput.schema"
import { PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPhotoInput.schema"
import { PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutPhotoInput.schema"
import { PageArtworkUpdateWithoutPhotoInputObjectSchema } from "./PageArtworkUpdateWithoutPhotoInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUpsertWithWhereUniqueWithoutPhotoInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PageArtworkUpdateWithoutPhotoInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutPhotoInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkUpsertWithWhereUniqueWithoutPhotoInputObjectSchema =
  Schema

/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutPhotoInput.schema"
import { PageArtworkUpdateWithoutPhotoInputObjectSchema } from "./PageArtworkUpdateWithoutPhotoInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUpdateWithWhereUniqueWithoutPhotoInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageArtworkUpdateWithoutPhotoInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutPhotoInputObjectSchema =
  Schema

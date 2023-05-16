import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkScalarWhereInputObjectSchema } from "./PageArtworkScalarWhereInput.schema"
import { PageArtworkUncheckedUpdateManyWithoutArtworksInputObjectSchema } from "./PageArtworkUncheckedUpdateManyWithoutArtworksInput.schema"
import { PageArtworkUpdateManyMutationInputObjectSchema } from "./PageArtworkUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PageArtworkUncheckedUpdateManyWithoutArtworksInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const PageArtworkUpdateManyWithWhereWithoutPageInputObjectSchema = Schema

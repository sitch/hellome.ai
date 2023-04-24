import { z } from 'zod'
import { PageArtworkScalarWhereInputObjectSchema } from './PageArtworkScalarWhereInput.schema'
import { PageArtworkUpdateManyMutationInputObjectSchema } from './PageArtworkUpdateManyMutationInput.schema'
import { PageArtworkUncheckedUpdateManyWithoutPageArtworksInputObjectSchema } from './PageArtworkUncheckedUpdateManyWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PageArtworkUncheckedUpdateManyWithoutPageArtworksInputObjectSchema
        ),
      ]),
    })
    .strict()

export const PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema =
  Schema

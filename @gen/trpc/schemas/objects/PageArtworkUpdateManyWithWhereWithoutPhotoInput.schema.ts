import { PageArtworkScalarWhereInputObjectSchema } from './PageArtworkScalarWhereInput.schema'
import { PageArtworkUncheckedUpdateManyWithoutPageArtworksInputObjectSchema } from './PageArtworkUncheckedUpdateManyWithoutPageArtworksInput.schema'
import { PageArtworkUpdateManyMutationInputObjectSchema } from './PageArtworkUpdateManyMutationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutPhotoInput> =
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

export const PageArtworkUpdateManyWithWhereWithoutPhotoInputObjectSchema =
  Schema

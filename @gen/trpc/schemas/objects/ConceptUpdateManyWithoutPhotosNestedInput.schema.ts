import { z } from 'zod'
import { ConceptCreateWithoutPhotosInputObjectSchema } from './ConceptCreateWithoutPhotosInput.schema'
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from './ConceptUncheckedCreateWithoutPhotosInput.schema'
import { ConceptCreateOrConnectWithoutPhotosInputObjectSchema } from './ConceptCreateOrConnectWithoutPhotosInput.schema'
import { ConceptUpsertWithWhereUniqueWithoutPhotosInputObjectSchema } from './ConceptUpsertWithWhereUniqueWithoutPhotosInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptUpdateWithWhereUniqueWithoutPhotosInputObjectSchema } from './ConceptUpdateWithWhereUniqueWithoutPhotosInput.schema'
import { ConceptUpdateManyWithWhereWithoutPhotosInputObjectSchema } from './ConceptUpdateManyWithWhereWithoutPhotosInput.schema'
import { ConceptScalarWhereInputObjectSchema } from './ConceptScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUpdateManyWithoutPhotosNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
        z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema).array(),
        z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
        z
          .lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputObjectSchema),
        z
          .lazy(() => ConceptCreateOrConnectWithoutPhotosInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ConceptUpsertWithWhereUniqueWithoutPhotosInputObjectSchema
        ),
        z
          .lazy(
            () => ConceptUpsertWithWhereUniqueWithoutPhotosInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ConceptUpdateWithWhereUniqueWithoutPhotosInputObjectSchema
        ),
        z
          .lazy(
            () => ConceptUpdateWithWhereUniqueWithoutPhotosInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputObjectSchema),
        z
          .lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ConceptScalarWhereInputObjectSchema),
        z.lazy(() => ConceptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const ConceptUpdateManyWithoutPhotosNestedInputObjectSchema = Schema
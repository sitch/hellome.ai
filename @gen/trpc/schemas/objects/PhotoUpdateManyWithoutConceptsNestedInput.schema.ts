import { z } from 'zod'
import { PhotoCreateWithoutConceptsInputObjectSchema } from './PhotoCreateWithoutConceptsInput.schema'
import { PhotoUncheckedCreateWithoutConceptsInputObjectSchema } from './PhotoUncheckedCreateWithoutConceptsInput.schema'
import { PhotoCreateOrConnectWithoutConceptsInputObjectSchema } from './PhotoCreateOrConnectWithoutConceptsInput.schema'
import { PhotoUpsertWithWhereUniqueWithoutConceptsInputObjectSchema } from './PhotoUpsertWithWhereUniqueWithoutConceptsInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoUpdateWithWhereUniqueWithoutConceptsInputObjectSchema } from './PhotoUpdateWithWhereUniqueWithoutConceptsInput.schema'
import { PhotoUpdateManyWithWhereWithoutConceptsInputObjectSchema } from './PhotoUpdateManyWithWhereWithoutConceptsInput.schema'
import { PhotoScalarWhereInputObjectSchema } from './PhotoScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpdateManyWithoutConceptsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutConceptsInputObjectSchema),
        z.lazy(() => PhotoCreateWithoutConceptsInputObjectSchema).array(),
        z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputObjectSchema),
        z
          .lazy(() => PhotoUncheckedCreateWithoutConceptsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputObjectSchema),
        z
          .lazy(() => PhotoCreateOrConnectWithoutConceptsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PhotoUpsertWithWhereUniqueWithoutConceptsInputObjectSchema
        ),
        z
          .lazy(
            () => PhotoUpsertWithWhereUniqueWithoutConceptsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => PhotoWhereUniqueInputObjectSchema),
        z.lazy(() => PhotoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PhotoWhereUniqueInputObjectSchema),
        z.lazy(() => PhotoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PhotoWhereUniqueInputObjectSchema),
        z.lazy(() => PhotoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PhotoWhereUniqueInputObjectSchema),
        z.lazy(() => PhotoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PhotoUpdateWithWhereUniqueWithoutConceptsInputObjectSchema
        ),
        z
          .lazy(
            () => PhotoUpdateWithWhereUniqueWithoutConceptsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputObjectSchema),
        z
          .lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PhotoScalarWhereInputObjectSchema),
        z.lazy(() => PhotoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PhotoUpdateManyWithoutConceptsNestedInputObjectSchema = Schema
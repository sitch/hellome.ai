import { z } from 'zod'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'
import { PhotoCreateOrConnectWithoutFileInputObjectSchema } from './PhotoCreateOrConnectWithoutFileInput.schema'
import { PhotoUpsertWithoutFileInputObjectSchema } from './PhotoUpsertWithoutFileInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoUpdateWithoutFileInputObjectSchema } from './PhotoUpdateWithoutFileInput.schema'
import { PhotoUncheckedUpdateWithoutFileInputObjectSchema } from './PhotoUncheckedUpdateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUncheckedUpdateOneWithoutFileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
          z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PhotoCreateOrConnectWithoutFileInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => PhotoUpsertWithoutFileInputObjectSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PhotoUpdateWithoutFileInputObjectSchema),
          z.lazy(() => PhotoUncheckedUpdateWithoutFileInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const PhotoUncheckedUpdateOneWithoutFileNestedInputObjectSchema = Schema

import { z } from 'zod'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'
import { PhotoCreateOrConnectWithoutFileInputObjectSchema } from './PhotoCreateOrConnectWithoutFileInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateNestedOneWithoutFileInput> =
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
      connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema = Schema

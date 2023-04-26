import { PhotoCreateOrConnectWithoutFileInputObjectSchema } from './PhotoCreateOrConnectWithoutFileInput.schema'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoCreateNestedOneWithoutFileInput> = z
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

export const PhotoCreateNestedOneWithoutFileInputObjectSchema = Schema

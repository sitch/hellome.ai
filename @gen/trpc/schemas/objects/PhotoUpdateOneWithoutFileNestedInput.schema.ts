import { PhotoCreateOrConnectWithoutFileInputObjectSchema } from './PhotoCreateOrConnectWithoutFileInput.schema'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'
import { PhotoUncheckedUpdateWithoutFileInputObjectSchema } from './PhotoUncheckedUpdateWithoutFileInput.schema'
import { PhotoUpdateWithoutFileInputObjectSchema } from './PhotoUpdateWithoutFileInput.schema'
import { PhotoUpsertWithoutFileInputObjectSchema } from './PhotoUpsertWithoutFileInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoUpdateOneWithoutFileNestedInput> = z
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

export const PhotoUpdateOneWithoutFileNestedInputObjectSchema = Schema

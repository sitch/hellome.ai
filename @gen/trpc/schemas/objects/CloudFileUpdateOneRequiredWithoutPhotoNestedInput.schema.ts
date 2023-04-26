import { CloudFileCreateOrConnectWithoutPhotoInputObjectSchema } from './CloudFileCreateOrConnectWithoutPhotoInput.schema'
import { CloudFileCreateWithoutPhotoInputObjectSchema } from './CloudFileCreateWithoutPhotoInput.schema'
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedCreateWithoutPhotoInput.schema'
import { CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPhotoInput.schema'
import { CloudFileUpdateWithoutPhotoInputObjectSchema } from './CloudFileUpdateWithoutPhotoInput.schema'
import { CloudFileUpsertWithoutPhotoInputObjectSchema } from './CloudFileUpsertWithoutPhotoInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileUpdateOneRequiredWithoutPhotoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
          z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CloudFileCreateOrConnectWithoutPhotoInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CloudFileUpsertWithoutPhotoInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CloudFileUpdateWithoutPhotoInputObjectSchema),
          z.lazy(() => CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema =
  Schema

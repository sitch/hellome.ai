import { z } from 'zod'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutFileInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutFileInputObjectSchema = Schema

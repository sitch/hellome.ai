import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyAuthorInputEnvelopeObjectSchema } from "./PageTextCreateManyAuthorInputEnvelope.schema"
import { PageTextCreateOrConnectWithoutAuthorInputObjectSchema } from "./PageTextCreateOrConnectWithoutAuthorInput.schema"
import { PageTextCreateWithoutAuthorInputObjectSchema } from "./PageTextCreateWithoutAuthorInput.schema"
import { PageTextUncheckedCreateWithoutAuthorInputObjectSchema } from "./PageTextUncheckedCreateWithoutAuthorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PageTextCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageTextCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageTextCreateNestedManyWithoutAuthorInputObjectSchema = Schema

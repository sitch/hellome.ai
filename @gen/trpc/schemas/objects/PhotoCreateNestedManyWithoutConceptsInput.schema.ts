import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateOrConnectWithoutConceptsInputObjectSchema } from "./PhotoCreateOrConnectWithoutConceptsInput.schema"
import { PhotoCreateWithoutConceptsInputObjectSchema } from "./PhotoCreateWithoutConceptsInput.schema"
import { PhotoUncheckedCreateWithoutConceptsInputObjectSchema } from "./PhotoUncheckedCreateWithoutConceptsInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PhotoCreateNestedManyWithoutConceptsInput> = z
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
    connect: z
      .union([
        z.lazy(() => PhotoWhereUniqueInputObjectSchema),
        z.lazy(() => PhotoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PhotoCreateNestedManyWithoutConceptsInputObjectSchema = Schema

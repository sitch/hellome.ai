import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateWithoutUserInputObjectSchema } from "./EditionCreateWithoutUserInput.schema"
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from "./EditionUncheckedCreateWithoutUserInput.schema"
import { EditionUncheckedUpdateWithoutUserInputObjectSchema } from "./EditionUncheckedUpdateWithoutUserInput.schema"
import { EditionUpdateWithoutUserInputObjectSchema } from "./EditionUpdateWithoutUserInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.EditionUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EditionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema

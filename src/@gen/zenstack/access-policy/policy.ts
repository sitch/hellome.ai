/* eslint-disable */

import { ConceptType } from "@prisma/client"
import { ConceptStatus } from "@prisma/client"
import { LRScheduler } from "@prisma/client"
import { FileResourceType } from "@prisma/client"
import { FilePrivacy } from "@prisma/client"
import { CloudFileRegion } from "@prisma/client"
import { PageStatus } from "@prisma/client"
import { PageType } from "@prisma/client"
import { PageTextType } from "@prisma/client"
import { Locale } from "@prisma/client"
import { type QueryContext, hasAllFields } from "@zenstackhq/runtime"
import { z } from "zod"

const policy = {
  guard: {
    user: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    author: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    artist: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    translator: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    concept: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    prediction: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    dreamBoothTraining: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    edition: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    cloudFile: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    photo: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    pDF: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    story: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    pageArtwork: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    pageText: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
    page: {
      create: false,
      update: false,
      postUpdate: true,
      read: false,
      delete: false,
    },
  },
  schema: {
    user: z
      .object({
        name: z.string().min(1).max(160),
        email: z.string().email().min(3).max(160),
      })
      .partial(),
    concept: z
      .object({
        name: z.string().min(1).max(100),
        dreamboothModelURI: z.string().url().nullable(),
      })
      .partial(),
    cloudFile: z
      .object({
        extension: z.string().min(1).max(7),
        size: z.number().gt(0),
      })
      .partial(),
    photo: z
      .object({
        height: z.number().gt(0),
        width: z.number().gt(0),
      })
      .partial(),
    pDF: z
      .object({
        height: z.number().gt(0),
        width: z.number().gt(0),
        pages: z.number().gt(0),
      })
      .partial(),
  },
}
export default policy

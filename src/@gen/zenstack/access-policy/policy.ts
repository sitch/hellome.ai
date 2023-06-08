/* eslint-disable */
import {
  CloudFileRegion,
  ConceptStatus,
  ConceptType,
  FilePrivacy,
  FileResourceType,
  Locale,
  LRScheduler,
  PageStatus,
  PageTextType,
  PageType,
} from "@prisma/client"
import { hasAllFields, type QueryContext } from "@zenstackhq/runtime"
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
        publicUrl: z.string().url().nullable(),
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
    pageText: z
      .object({
        text: z.string().min(1).max(5000),
      })
      .partial(),
    page: z
      .object({
        pageNumber: z.number().gte(1).lte(100),
      })
      .partial(),
  },
}
export default policy

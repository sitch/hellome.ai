/* eslint-disable */
import { PrismaClient } from "@prisma/client"
import { AnyRootConfig } from "@trpc/server"
import { createBuilder } from "@trpc/server/dist/core/internals/procedureBuilder"
import { createRouterFactory } from "@trpc/server/dist/core/router"

import createArtistRouter from "./Artist.router"
import createAuthorRouter from "./Author.router"
import createCloudFileRouter from "./CloudFile.router"
import createConceptRouter from "./Concept.router"
import createDreamBoothTrainingRouter from "./DreamBoothTraining.router"
import createEditionRouter from "./Edition.router"
import createPageRouter from "./Page.router"
import createPageArtworkRouter from "./PageArtwork.router"
import createPageTextRouter from "./PageText.router"
import createPDFRouter from "./PDF.router"
import createPhotoRouter from "./Photo.router"
import createPredictionRouter from "./Prediction.router"
import createStoryRouter from "./Story.router"
import createTranslatorRouter from "./Translator.router"
import createUserRouter from "./User.router"

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = ReturnType<
  typeof createRouterFactory<Config>
>

export type ProcBuilder<Config extends BaseConfig> = ReturnType<
  typeof createBuilder<Config>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter<Config>(router, procedure),
    author: createAuthorRouter<Config>(router, procedure),
    artist: createArtistRouter<Config>(router, procedure),
    translator: createTranslatorRouter<Config>(router, procedure),
    concept: createConceptRouter<Config>(router, procedure),
    prediction: createPredictionRouter<Config>(router, procedure),
    dreamBoothTraining: createDreamBoothTrainingRouter<Config>(
      router,
      procedure,
    ),
    edition: createEditionRouter<Config>(router, procedure),
    cloudFile: createCloudFileRouter<Config>(router, procedure),
    photo: createPhotoRouter<Config>(router, procedure),
    pDF: createPDFRouter<Config>(router, procedure),
    story: createStoryRouter<Config>(router, procedure),
    pageArtwork: createPageArtworkRouter<Config>(router, procedure),
    pageText: createPageTextRouter<Config>(router, procedure),
    page: createPageRouter<Config>(router, procedure),
  })
}

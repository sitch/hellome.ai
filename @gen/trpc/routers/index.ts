import { t } from "./helpers/createRouter";
import { cloudfilesRouter } from "./CloudFile.router";
import { photosRouter } from "./Photo.router";
import { pdfsRouter } from "./PDF.router";
import { usersRouter } from "./User.router";
import { authorsRouter } from "./Author.router";
import { artistsRouter } from "./Artist.router";
import { translatorsRouter } from "./Translator.router";
import { storiesRouter } from "./Story.router";
import { pageartworksRouter } from "./PageArtwork.router";
import { pagetextsRouter } from "./PageText.router";
import { pagesRouter } from "./Page.router";
import { editionsRouter } from "./Edition.router";
import { conceptsRouter } from "./Concept.router";
import { predictionsRouter } from "./Prediction.router";

export const appRouter = t.router({
  cloudfile: cloudfilesRouter,
  photo: photosRouter,
  pdf: pdfsRouter,
  user: usersRouter,
  author: authorsRouter,
  artist: artistsRouter,
  translator: translatorsRouter,
  story: storiesRouter,
  pageartwork: pageartworksRouter,
  pagetext: pagetextsRouter,
  page: pagesRouter,
  edition: editionsRouter,
  concept: conceptsRouter,
  prediction: predictionsRouter
})


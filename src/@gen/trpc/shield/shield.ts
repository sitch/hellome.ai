import { allow, shield } from "trpc-shield"

import { Context } from "../../../../server/context"

export const permissions = shield<Context>({
  query: {
    aggregateArtist: allow,
    aggregateAuthor: allow,
    aggregateCloudFile: allow,
    aggregateConcept: allow,
    aggregateDreamBoothTraining: allow,
    aggregateEdition: allow,
    aggregatePDF: allow,
    aggregatePage: allow,
    aggregatePageArtwork: allow,
    aggregatePageText: allow,
    aggregatePhoto: allow,
    aggregatePrediction: allow,
    aggregateStory: allow,
    aggregateTranslator: allow,
    aggregateUser: allow,
    findFirstArtist: allow,
    findFirstAuthor: allow,
    findFirstCloudFile: allow,
    findFirstConcept: allow,
    findFirstDreamBoothTraining: allow,
    findFirstEdition: allow,
    findFirstPDF: allow,
    findFirstPage: allow,
    findFirstPageArtwork: allow,
    findFirstPageText: allow,
    findFirstPhoto: allow,
    findFirstPrediction: allow,
    findFirstStory: allow,
    findFirstTranslator: allow,
    findFirstUser: allow,
    findManyArtist: allow,
    findManyAuthor: allow,
    findManyCloudFile: allow,
    findManyConcept: allow,
    findManyDreamBoothTraining: allow,
    findManyEdition: allow,
    findManyPDF: allow,
    findManyPage: allow,
    findManyPageArtwork: allow,
    findManyPageText: allow,
    findManyPhoto: allow,
    findManyPrediction: allow,
    findManyStory: allow,
    findManyTranslator: allow,
    findManyUser: allow,
    findUniqueArtist: allow,
    findUniqueAuthor: allow,
    findUniqueCloudFile: allow,
    findUniqueConcept: allow,
    findUniqueDreamBoothTraining: allow,
    findUniqueEdition: allow,
    findUniquePDF: allow,
    findUniquePage: allow,
    findUniquePageArtwork: allow,
    findUniquePageText: allow,
    findUniquePhoto: allow,
    findUniquePrediction: allow,
    findUniqueStory: allow,
    findUniqueTranslator: allow,
    findUniqueUser: allow,
    groupByArtist: allow,
    groupByAuthor: allow,
    groupByCloudFile: allow,
    groupByConcept: allow,
    groupByDreamBoothTraining: allow,
    groupByEdition: allow,
    groupByPDF: allow,
    groupByPage: allow,
    groupByPageArtwork: allow,
    groupByPageText: allow,
    groupByPhoto: allow,
    groupByPrediction: allow,
    groupByStory: allow,
    groupByTranslator: allow,
    groupByUser: allow,
  },
  mutation: {
    createOneArtist: allow,
    createOneAuthor: allow,
    createOneCloudFile: allow,
    createOneConcept: allow,
    createOneDreamBoothTraining: allow,
    createOneEdition: allow,
    createOnePDF: allow,
    createOnePage: allow,
    createOnePageArtwork: allow,
    createOnePageText: allow,
    createOnePhoto: allow,
    createOnePrediction: allow,
    createOneStory: allow,
    createOneTranslator: allow,
    createOneUser: allow,
    deleteManyArtist: allow,
    deleteManyAuthor: allow,
    deleteManyCloudFile: allow,
    deleteManyConcept: allow,
    deleteManyDreamBoothTraining: allow,
    deleteManyEdition: allow,
    deleteManyPDF: allow,
    deleteManyPage: allow,
    deleteManyPageArtwork: allow,
    deleteManyPageText: allow,
    deleteManyPhoto: allow,
    deleteManyPrediction: allow,
    deleteManyStory: allow,
    deleteManyTranslator: allow,
    deleteManyUser: allow,
    deleteOneArtist: allow,
    deleteOneAuthor: allow,
    deleteOneCloudFile: allow,
    deleteOneConcept: allow,
    deleteOneDreamBoothTraining: allow,
    deleteOneEdition: allow,
    deleteOnePDF: allow,
    deleteOnePage: allow,
    deleteOnePageArtwork: allow,
    deleteOnePageText: allow,
    deleteOnePhoto: allow,
    deleteOnePrediction: allow,
    deleteOneStory: allow,
    deleteOneTranslator: allow,
    deleteOneUser: allow,
    updateManyArtist: allow,
    updateManyAuthor: allow,
    updateManyCloudFile: allow,
    updateManyConcept: allow,
    updateManyDreamBoothTraining: allow,
    updateManyEdition: allow,
    updateManyPDF: allow,
    updateManyPage: allow,
    updateManyPageArtwork: allow,
    updateManyPageText: allow,
    updateManyPhoto: allow,
    updateManyPrediction: allow,
    updateManyStory: allow,
    updateManyTranslator: allow,
    updateManyUser: allow,
    updateOneArtist: allow,
    updateOneAuthor: allow,
    updateOneCloudFile: allow,
    updateOneConcept: allow,
    updateOneDreamBoothTraining: allow,
    updateOneEdition: allow,
    updateOnePDF: allow,
    updateOnePage: allow,
    updateOnePageArtwork: allow,
    updateOnePageText: allow,
    updateOnePhoto: allow,
    updateOnePrediction: allow,
    updateOneStory: allow,
    updateOneTranslator: allow,
    updateOneUser: allow,
    upsertOneArtist: allow,
    upsertOneAuthor: allow,
    upsertOneCloudFile: allow,
    upsertOneConcept: allow,
    upsertOneDreamBoothTraining: allow,
    upsertOneEdition: allow,
    upsertOnePDF: allow,
    upsertOnePage: allow,
    upsertOnePageArtwork: allow,
    upsertOnePageText: allow,
    upsertOnePhoto: allow,
    upsertOnePrediction: allow,
    upsertOneStory: allow,
    upsertOneTranslator: allow,
    upsertOneUser: allow,
  },
})
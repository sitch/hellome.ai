/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { PredictionSchema } from "../schemas/Prediction.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PredictionSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).prediction.aggregate(input)),
      ),

    createMany: procedure
      .input(PredictionSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.createMany(input)),
      ),

    create: procedure
      .input(PredictionSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.create(input)),
      ),

    deleteMany: procedure
      .input(PredictionSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.deleteMany(input)),
      ),

    delete: procedure
      .input(PredictionSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.delete(input)),
      ),

    findFirst: procedure
      .input(PredictionSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).prediction.findFirst(input)),
      ),

    findFirstOrThrow: procedure
      .input(PredictionSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).prediction.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PredictionSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).prediction.findMany(input))),

    findUnique: procedure
      .input(PredictionSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).prediction.findUnique(input)),
      ),

    findUniqueOrThrow: procedure
      .input(PredictionSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).prediction.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PredictionSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).prediction.groupBy(input))),

    updateMany: procedure
      .input(PredictionSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.updateMany(input)),
      ),

    update: procedure
      .input(PredictionSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.update(input)),
      ),

    upsert: procedure
      .input(PredictionSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).prediction.upsert(input)),
      ),
  })
}

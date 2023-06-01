/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { DreamBoothTrainingSchema } from "../schemas/DreamBoothTraining.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(DreamBoothTrainingSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.aggregate(input)),
      ),

    createMany: procedure
      .input(DreamBoothTrainingSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.createMany(input)),
      ),

    create: procedure
      .input(DreamBoothTrainingSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.create(input)),
      ),

    deleteMany: procedure
      .input(DreamBoothTrainingSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.deleteMany(input)),
      ),

    delete: procedure
      .input(DreamBoothTrainingSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.delete(input)),
      ),

    findFirst: procedure
      .input(DreamBoothTrainingSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.findFirst(input)),
      ),

    findFirstOrThrow: procedure
      .input(DreamBoothTrainingSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(DreamBoothTrainingSchema.findMany)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.findMany(input)),
      ),

    findUnique: procedure
      .input(DreamBoothTrainingSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.findUnique(input)),
      ),

    findUniqueOrThrow: procedure
      .input(DreamBoothTrainingSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(DreamBoothTrainingSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).dreamBoothTraining.groupBy(input)),
      ),

    updateMany: procedure
      .input(DreamBoothTrainingSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.updateMany(input)),
      ),

    update: procedure
      .input(DreamBoothTrainingSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.update(input)),
      ),

    upsert: procedure
      .input(DreamBoothTrainingSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).dreamBoothTraining.upsert(input)),
      ),
  })
}

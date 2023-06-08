/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { CloudFileSchema } from "../schemas/CloudFile.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(CloudFileSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).cloudFile.aggregate(input))),

    createMany: procedure
      .input(CloudFileSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.createMany(input)),
      ),

    create: procedure
      .input(CloudFileSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.create(input)),
      ),

    deleteMany: procedure
      .input(CloudFileSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.deleteMany(input)),
      ),

    delete: procedure
      .input(CloudFileSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.delete(input)),
      ),

    findFirst: procedure
      .input(CloudFileSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).cloudFile.findFirst(input))),

    findFirstOrThrow: procedure
      .input(CloudFileSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cloudFile.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(CloudFileSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).cloudFile.findMany(input))),

    findUnique: procedure
      .input(CloudFileSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cloudFile.findUnique(input)),
      ),

    findUniqueOrThrow: procedure
      .input(CloudFileSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cloudFile.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(CloudFileSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).cloudFile.groupBy(input))),

    updateMany: procedure
      .input(CloudFileSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.updateMany(input)),
      ),

    update: procedure
      .input(CloudFileSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.update(input)),
      ),

    upsert: procedure
      .input(CloudFileSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cloudFile.upsert(input)),
      ),
  })
}

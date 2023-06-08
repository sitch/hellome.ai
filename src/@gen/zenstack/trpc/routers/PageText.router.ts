/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { PageTextSchema } from "../schemas/PageText.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PageTextSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).pageText.aggregate(input))),

    createMany: procedure
      .input(PageTextSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.createMany(input)),
      ),

    create: procedure
      .input(PageTextSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.create(input)),
      ),

    deleteMany: procedure
      .input(PageTextSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.deleteMany(input)),
      ),

    delete: procedure
      .input(PageTextSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.delete(input)),
      ),

    findFirst: procedure
      .input(PageTextSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).pageText.findFirst(input))),

    findFirstOrThrow: procedure
      .input(PageTextSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageText.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PageTextSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).pageText.findMany(input))),

    findUnique: procedure
      .input(PageTextSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).pageText.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(PageTextSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageText.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PageTextSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).pageText.groupBy(input))),

    updateMany: procedure
      .input(PageTextSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.updateMany(input)),
      ),

    update: procedure
      .input(PageTextSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.update(input)),
      ),

    upsert: procedure
      .input(PageTextSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageText.upsert(input)),
      ),
  })
}

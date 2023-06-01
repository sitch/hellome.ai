/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { PageArtworkSchema } from "../schemas/PageArtwork.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PageArtworkSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.aggregate(input)),
      ),

    createMany: procedure
      .input(PageArtworkSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.createMany(input)),
      ),

    create: procedure
      .input(PageArtworkSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.create(input)),
      ),

    deleteMany: procedure
      .input(PageArtworkSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.deleteMany(input)),
      ),

    delete: procedure
      .input(PageArtworkSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.delete(input)),
      ),

    findFirst: procedure
      .input(PageArtworkSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.findFirst(input)),
      ),

    findFirstOrThrow: procedure
      .input(PageArtworkSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PageArtworkSchema.findMany)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.findMany(input)),
      ),

    findUnique: procedure
      .input(PageArtworkSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.findUnique(input)),
      ),

    findUniqueOrThrow: procedure
      .input(PageArtworkSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pageArtwork.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PageArtworkSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).pageArtwork.groupBy(input))),

    updateMany: procedure
      .input(PageArtworkSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.updateMany(input)),
      ),

    update: procedure
      .input(PageArtworkSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.update(input)),
      ),

    upsert: procedure
      .input(PageArtworkSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pageArtwork.upsert(input)),
      ),
  })
}

/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { ArtistSchema } from "../schemas/Artist.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(ArtistSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).artist.aggregate(input))),

    createMany: procedure
      .input(ArtistSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.createMany(input)),
      ),

    create: procedure
      .input(ArtistSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.create(input)),
      ),

    deleteMany: procedure
      .input(ArtistSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.deleteMany(input)),
      ),

    delete: procedure
      .input(ArtistSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.delete(input)),
      ),

    findFirst: procedure
      .input(ArtistSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).artist.findFirst(input))),

    findFirstOrThrow: procedure
      .input(ArtistSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).artist.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(ArtistSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).artist.findMany(input))),

    findUnique: procedure
      .input(ArtistSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).artist.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(ArtistSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).artist.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(ArtistSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).artist.groupBy(input))),

    updateMany: procedure
      .input(ArtistSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.updateMany(input)),
      ),

    update: procedure
      .input(ArtistSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.update(input)),
      ),

    upsert: procedure
      .input(ArtistSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).artist.upsert(input)),
      ),
  })
}

/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { StorySchema } from "../schemas/Story.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(StorySchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).story.aggregate(input))),

    createMany: procedure
      .input(StorySchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.createMany(input)),
      ),

    create: procedure
      .input(StorySchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.create(input)),
      ),

    deleteMany: procedure
      .input(StorySchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.deleteMany(input)),
      ),

    delete: procedure
      .input(StorySchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.delete(input)),
      ),

    findFirst: procedure
      .input(StorySchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).story.findFirst(input))),

    findFirstOrThrow: procedure
      .input(StorySchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).story.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(StorySchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).story.findMany(input))),

    findUnique: procedure
      .input(StorySchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).story.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(StorySchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).story.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(StorySchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).story.groupBy(input))),

    updateMany: procedure
      .input(StorySchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.updateMany(input)),
      ),

    update: procedure
      .input(StorySchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.update(input)),
      ),

    upsert: procedure
      .input(StorySchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).story.upsert(input)),
      ),
  })
}

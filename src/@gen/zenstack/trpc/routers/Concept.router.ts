/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { ConceptSchema } from "../schemas/Concept.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(ConceptSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).concept.aggregate(input))),

    createMany: procedure
      .input(ConceptSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.createMany(input)),
      ),

    create: procedure
      .input(ConceptSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.create(input)),
      ),

    deleteMany: procedure
      .input(ConceptSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.deleteMany(input)),
      ),

    delete: procedure
      .input(ConceptSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.delete(input)),
      ),

    findFirst: procedure
      .input(ConceptSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).concept.findFirst(input))),

    findFirstOrThrow: procedure
      .input(ConceptSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).concept.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(ConceptSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).concept.findMany(input))),

    findUnique: procedure
      .input(ConceptSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).concept.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(ConceptSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).concept.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(ConceptSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).concept.groupBy(input))),

    updateMany: procedure
      .input(ConceptSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.updateMany(input)),
      ),

    update: procedure
      .input(ConceptSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.update(input)),
      ),

    upsert: procedure
      .input(ConceptSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).concept.upsert(input)),
      ),
  })
}

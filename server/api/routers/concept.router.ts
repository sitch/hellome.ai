// import { shieldedProcedure, t } from "@/@gen/trpc/routers/helpers/createRouter"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

// import { ConceptUpdateOneSchema } from "@/@gen/trpc/schemas/updateOneConcept.schema"
import { ConceptCreateArgsSchema, ConceptUpdateArgsSchema } from "@/@gen/zod"

ConceptCreateArgsSchema

export const conceptRouter = createTRPCRouter({
  createOne: publicProcedure
    // .input(ConceptCreateInputSchema)
    .input(ConceptCreateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.prisma.concept.create(input)
      return result
    }),
  updateOne: publicProcedure
    // .input(ConceptUpdateOneSchema)
    .input(ConceptUpdateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneConcept = await ctx.prisma.concept.update(input)
      return updateOneConcept
    }),

  // aggregate: publicProcedure
  //   .input(ConceptAggregateSchema).query(async ({ ctx, input }) => {
  //     const aggregateConcept = await ctx.prisma.concept.aggregate(input);
  //     return aggregateConcept;
  //   }),
  // createMany: publicProcedure
  //   .input(ConceptCreateManySchema).mutation(async ({ ctx, input }) => {
  //     const createManyConcept = await ctx.prisma.concept.createMany(input);
  //     return createManyConcept;
  //   }),
  // createOne: publicProcedure
  //   .input(ConceptCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneConcept = await ctx.prisma.concept.create(input);
  //     return createOneConcept;
  //   }),
  // deleteMany: publicProcedure
  //   .input(ConceptDeleteManySchema).mutation(async ({ ctx, input }) => {
  //     const deleteManyConcept = await ctx.prisma.concept.deleteMany(input);
  //     return deleteManyConcept;
  //   }),
  // deleteOne: publicProcedure
  //   .input(ConceptDeleteOneSchema).mutation(async ({ ctx, input }) => {
  //     const deleteOneConcept = await ctx.prisma.concept.delete(input);
  //     return deleteOneConcept;
  //   }),
  // findFirst: publicProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const findFirstConcept = await ctx.prisma.concept.findFirst(input);
  //     return findFirstConcept;
  //   }),
  // findFirstConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const findFirstConceptOrThrow = await ctx.prisma.concept.findFirstOrThrow(input);
  //     return findFirstConceptOrThrow;
  //   }),
  // findMany: publicProcedure
  //   .input(ConceptFindManySchema).query(async ({ ctx, input }) => {
  //     const findManyConcept = await ctx.prisma.concept.findMany(input);
  //     return findManyConcept;
  //   }),
  // findUnique: publicProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const findUniqueConcept = await ctx.prisma.concept.findUnique(input);
  //     return findUniqueConcept;
  //   }),
  // findUniqueConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const findUniqueConceptOrThrow = await ctx.prisma.concept.findUniqueOrThrow(input);
  //     return findUniqueConceptOrThrow;
  //   }),
  // groupBy: publicProcedure
  //   .input(ConceptGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByConcept = await ctx.prisma.concept.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return groupByConcept;
  //   }),
  // updateMany: publicProcedure
  //   .input(ConceptUpdateManySchema).mutation(async ({ ctx, input }) => {
  //     const updateManyConcept = await ctx.prisma.concept.updateMany(input);
  //     return updateManyConcept;
  //   }),
  // updateOne: publicProcedure
  //   .input(ConceptUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const updateOneConcept = await ctx.prisma.concept.update(input);
  //     return updateOneConcept;
  //   }),
  // upsertOne: publicProcedure
  //   .input(ConceptUpsertSchema).mutation(async ({ ctx, input }) => {
  //     const upsertOneConcept = await ctx.prisma.concept.upsert(input);
  //     return upsertOneConcept;
  //   }),
})

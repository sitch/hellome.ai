// import { shieldedProcedure, t } from "@/@gen/trpc/routers/helpers/createRouter"

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc"

import { ConceptAggregateSchema } from "@/@gen/trpc/schemas/aggregateConcept.schema"
import { ConceptCreateManySchema } from "@/@gen/trpc/schemas/createManyConcept.schema"
import { ConceptCreateOneSchema } from "@/@gen/trpc/schemas/createOneConcept.schema"
import { ConceptDeleteManySchema } from "@/@gen/trpc/schemas/deleteManyConcept.schema"
import { ConceptDeleteOneSchema } from "@/@gen/trpc/schemas/deleteOneConcept.schema"
import { ConceptFindFirstSchema } from "@/@gen/trpc/schemas/findFirstConcept.schema"
import { ConceptFindManySchema } from "@/@gen/trpc/schemas/findManyConcept.schema"
import { ConceptFindUniqueSchema } from "@/@gen/trpc/schemas/findUniqueConcept.schema"
import { ConceptGroupBySchema } from "@/@gen/trpc/schemas/groupByConcept.schema"
import { ConceptUpdateManySchema } from "@/@gen/trpc/schemas/updateManyConcept.schema"
import { ConceptUpdateOneSchema } from "@/@gen/trpc/schemas/updateOneConcept.schema"
import { ConceptUpsertSchema } from "@/@gen/trpc/schemas/upsertOneConcept.schema"
import { ConceptCreateArgsSchema, ConceptCreateInputSchema } from "@/@gen/zod"

export const conceptRouter = createTRPCRouter({
  createOne: publicProcedure
    // .input(ConceptCreateInputSchema)
    .input(ConceptCreateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.prisma.concept.create(input)
      return result
    }),

  // aggregateConcept: shieldedProcedure
  //   .input(ConceptAggregateSchema).query(async ({ ctx, input }) => {
  //     const aggregateConcept = await ctx.prisma.concept.aggregate(input);
  //     return aggregateConcept;
  //   }),
  // createManyConcept: shieldedProcedure
  //   .input(ConceptCreateManySchema).mutation(async ({ ctx, input }) => {
  //     const createManyConcept = await ctx.prisma.concept.createMany(input);
  //     return createManyConcept;
  //   }),
  // createOneConcept: shieldedProcedure
  //   .input(ConceptCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneConcept = await ctx.prisma.concept.create(input);
  //     return createOneConcept;
  //   }),
  // deleteManyConcept: shieldedProcedure
  //   .input(ConceptDeleteManySchema).mutation(async ({ ctx, input }) => {
  //     const deleteManyConcept = await ctx.prisma.concept.deleteMany(input);
  //     return deleteManyConcept;
  //   }),
  // deleteOneConcept: shieldedProcedure
  //   .input(ConceptDeleteOneSchema).mutation(async ({ ctx, input }) => {
  //     const deleteOneConcept = await ctx.prisma.concept.delete(input);
  //     return deleteOneConcept;
  //   }),
  // findFirstConcept: shieldedProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const findFirstConcept = await ctx.prisma.concept.findFirst(input);
  //     return findFirstConcept;
  //   }),
  // findFirstConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const findFirstConceptOrThrow = await ctx.prisma.concept.findFirstOrThrow(input);
  //     return findFirstConceptOrThrow;
  //   }),
  // findManyConcept: shieldedProcedure
  //   .input(ConceptFindManySchema).query(async ({ ctx, input }) => {
  //     const findManyConcept = await ctx.prisma.concept.findMany(input);
  //     return findManyConcept;
  //   }),
  // findUniqueConcept: shieldedProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const findUniqueConcept = await ctx.prisma.concept.findUnique(input);
  //     return findUniqueConcept;
  //   }),
  // findUniqueConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const findUniqueConceptOrThrow = await ctx.prisma.concept.findUniqueOrThrow(input);
  //     return findUniqueConceptOrThrow;
  //   }),
  // groupByConcept: shieldedProcedure
  //   .input(ConceptGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByConcept = await ctx.prisma.concept.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return groupByConcept;
  //   }),
  // updateManyConcept: shieldedProcedure
  //   .input(ConceptUpdateManySchema).mutation(async ({ ctx, input }) => {
  //     const updateManyConcept = await ctx.prisma.concept.updateMany(input);
  //     return updateManyConcept;
  //   }),
  // updateOneConcept: shieldedProcedure
  //   .input(ConceptUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const updateOneConcept = await ctx.prisma.concept.update(input);
  //     return updateOneConcept;
  //   }),
  // upsertOneConcept: shieldedProcedure
  //   .input(ConceptUpsertSchema).mutation(async ({ ctx, input }) => {
  //     const upsertOneConcept = await ctx.prisma.concept.upsert(input);
  //     return upsertOneConcept;
  //   }),
})

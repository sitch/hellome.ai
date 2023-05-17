import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

import {
  ConceptCreateArgsSchema,
  ConceptFindManyArgsSchema,
  ConceptUpdateArgsSchema,
} from "@/@gen/zod"

// import { shieldedProcedure, t } from "@/@gen/trpc/routers/helpers/createRouter"
// import { ConceptUpdateOneSchema } from "@/@gen/trpc/schemas/updateOneConcept.schema"

export const replicateRouter = createTRPCRouter({
  // createOne: publicProcedure
  //   // .input(ConceptCreateInputSchema)
  //   .input(ConceptCreateArgsSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.create(input)
  //     return result
  //   }),
  // aggregate: publicProcedure
  //   .input(ConceptAggregateSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.aggregate(input);
  //     return result
  //   }),
  // createMany: publicProcedure
  //   .input(ConceptCreateManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.createMany(input);
  //     return result
  //   }),
  // createOne: publicProcedure
  //   .input(ConceptCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.create(input);
  //     return result
  //   }),
  // deleteMany: publicProcedure
  //   .input(ConceptDeleteManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.deleteMany(input);
  //     return result
  //   }),
  // deleteOne: publicProcedure
  //   .input(ConceptDeleteOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.delete(input);
  //     return result
  //   }),
  // findFirst: publicProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.findFirst(input);
  //     return result
  //   }),
  // findFirstConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.findFirstOrThrow(input);
  //     return result
  //   }),
  // findMany: publicProcedure
  //   .input(ConceptFindManySchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.findMany(input);
  //     return result
  //   }),
  // findUnique: publicProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.findUnique(input);
  //     return result
  //   }),
  // findUniqueConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.findUniqueOrThrow(input);
  //     return result
  //   }),
  // groupBy: publicProcedure
  //   .input(ConceptGroupBySchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return result
  //   }),
  // updateMany: publicProcedure
  //   .input(ConceptUpdateManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.updateMany(input);
  //     return result
  //   }),
  // updateOne: publicProcedure
  //   .input(ConceptUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.update(input);
  //     return result
  //   }),
  // upsertOne: publicProcedure
  //   .input(ConceptUpsertSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.replicate.upsert(input);
  //     return result
  //   }),
})

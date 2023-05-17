import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

import {
  ConceptCreateArgsSchema,
  ConceptFindManyArgsSchema,
  ConceptUpdateArgsSchema,
} from "@/@gen/zod"

// import { shieldedProcedure, t } from "@/@gen/trpc/routers/helpers/createRouter"
// import { ConceptUpdateOneSchema } from "@/@gen/trpc/schemas/updateOneConcept.schema"

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
      const result = await ctx.prisma.concept.update(input)
      return result
    }),
  findMany: publicProcedure
    .input(ConceptFindManyArgsSchema)
    // .input(Prisma.ConceptFindManyArgsSchema)
    .query(async ({ ctx, input }) => {
      const result = await ctx.prisma.concept.findMany(input)
      return result
    }),

  /**
   * @link https://trpc.io/docs/reactjs/useinfinitequery
   */
  paginate: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        // cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
        cursor: z.string().nullish(), // <-- "cursor" needs to exist, but can be any type
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50
      const cursor = input.cursor ?? undefined
      const items = await ctx.prisma.concept.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        // where: {
        //   title: {
        //     contains: 'Prisma' /* Optional filter */,
        //   },
        // },
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          id: "asc",
        },
      })
      let nextCursor: typeof cursor | undefined = undefined
      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem!.id
      }
      return {
        items,
        nextCursor,
      }
    }),

  // aggregate: publicProcedure
  //   .input(ConceptAggregateSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.aggregate(input);
  //     return result
  //   }),
  // createMany: publicProcedure
  //   .input(ConceptCreateManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.createMany(input);
  //     return result
  //   }),
  // createOne: publicProcedure
  //   .input(ConceptCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.create(input);
  //     return result
  //   }),
  // deleteMany: publicProcedure
  //   .input(ConceptDeleteManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.deleteMany(input);
  //     return result
  //   }),
  // deleteOne: publicProcedure
  //   .input(ConceptDeleteOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.delete(input);
  //     return result
  //   }),
  // findFirst: publicProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.findFirst(input);
  //     return result
  //   }),
  // findFirstConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindFirstSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.findFirstOrThrow(input);
  //     return result
  //   }),
  // findMany: publicProcedure
  //   .input(ConceptFindManySchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.findMany(input);
  //     return result
  //   }),
  // findUnique: publicProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.findUnique(input);
  //     return result
  //   }),
  // findUniqueConceptOrThrow: shieldedProcedure
  //   .input(ConceptFindUniqueSchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.findUniqueOrThrow(input);
  //     return result
  //   }),
  // groupBy: publicProcedure
  //   .input(ConceptGroupBySchema).query(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return result
  //   }),
  // updateMany: publicProcedure
  //   .input(ConceptUpdateManySchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.updateMany(input);
  //     return result
  //   }),
  // updateOne: publicProcedure
  //   .input(ConceptUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.update(input);
  //     return result
  //   }),
  // upsertOne: publicProcedure
  //   .input(ConceptUpsertSchema).mutation(async ({ ctx, input }) => {
  //     const result = await ctx.prisma.concept.upsert(input);
  //     return result
  //   }),
})

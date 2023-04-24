import { t, shieldedProcedure } from './helpers/createRouter'
import { PageArtworkAggregateSchema } from '../schemas/aggregatePageArtwork.schema'
import { PageArtworkCreateManySchema } from '../schemas/createManyPageArtwork.schema'
import { PageArtworkCreateOneSchema } from '../schemas/createOnePageArtwork.schema'
import { PageArtworkDeleteManySchema } from '../schemas/deleteManyPageArtwork.schema'
import { PageArtworkDeleteOneSchema } from '../schemas/deleteOnePageArtwork.schema'
import { PageArtworkFindFirstSchema } from '../schemas/findFirstPageArtwork.schema'
import { PageArtworkFindManySchema } from '../schemas/findManyPageArtwork.schema'
import { PageArtworkFindUniqueSchema } from '../schemas/findUniquePageArtwork.schema'
import { PageArtworkGroupBySchema } from '../schemas/groupByPageArtwork.schema'
import { PageArtworkUpdateManySchema } from '../schemas/updateManyPageArtwork.schema'
import { PageArtworkUpdateOneSchema } from '../schemas/updateOnePageArtwork.schema'
import { PageArtworkUpsertSchema } from '../schemas/upsertOnePageArtwork.schema'

export const pageartworksRouter = t.router({
  aggregatePageArtwork: shieldedProcedure
    .input(PageArtworkAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePageArtwork = await ctx.prisma.pageArtwork.aggregate(input)
      return aggregatePageArtwork
    }),
  createManyPageArtwork: shieldedProcedure
    .input(PageArtworkCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPageArtwork = await ctx.prisma.pageArtwork.createMany(
        input
      )
      return createManyPageArtwork
    }),
  createOnePageArtwork: shieldedProcedure
    .input(PageArtworkCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePageArtwork = await ctx.prisma.pageArtwork.create(input)
      return createOnePageArtwork
    }),
  deleteManyPageArtwork: shieldedProcedure
    .input(PageArtworkDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPageArtwork = await ctx.prisma.pageArtwork.deleteMany(
        input
      )
      return deleteManyPageArtwork
    }),
  deleteOnePageArtwork: shieldedProcedure
    .input(PageArtworkDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePageArtwork = await ctx.prisma.pageArtwork.delete(input)
      return deleteOnePageArtwork
    }),
  findFirstPageArtwork: shieldedProcedure
    .input(PageArtworkFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPageArtwork = await ctx.prisma.pageArtwork.findFirst(input)
      return findFirstPageArtwork
    }),
  findFirstPageArtworkOrThrow: shieldedProcedure
    .input(PageArtworkFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPageArtworkOrThrow =
        await ctx.prisma.pageArtwork.findFirstOrThrow(input)
      return findFirstPageArtworkOrThrow
    }),
  findManyPageArtwork: shieldedProcedure
    .input(PageArtworkFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPageArtwork = await ctx.prisma.pageArtwork.findMany(input)
      return findManyPageArtwork
    }),
  findUniquePageArtwork: shieldedProcedure
    .input(PageArtworkFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePageArtwork = await ctx.prisma.pageArtwork.findUnique(
        input
      )
      return findUniquePageArtwork
    }),
  findUniquePageArtworkOrThrow: shieldedProcedure
    .input(PageArtworkFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePageArtworkOrThrow =
        await ctx.prisma.pageArtwork.findUniqueOrThrow(input)
      return findUniquePageArtworkOrThrow
    }),
  groupByPageArtwork: shieldedProcedure
    .input(PageArtworkGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPageArtwork = await ctx.prisma.pageArtwork.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByPageArtwork
    }),
  updateManyPageArtwork: shieldedProcedure
    .input(PageArtworkUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPageArtwork = await ctx.prisma.pageArtwork.updateMany(
        input
      )
      return updateManyPageArtwork
    }),
  updateOnePageArtwork: shieldedProcedure
    .input(PageArtworkUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePageArtwork = await ctx.prisma.pageArtwork.update(input)
      return updateOnePageArtwork
    }),
  upsertOnePageArtwork: shieldedProcedure
    .input(PageArtworkUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePageArtwork = await ctx.prisma.pageArtwork.upsert(input)
      return upsertOnePageArtwork
    }),
})

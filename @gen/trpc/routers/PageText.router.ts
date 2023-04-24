import { t, shieldedProcedure } from './helpers/createRouter'
import { PageTextAggregateSchema } from '../schemas/aggregatePageText.schema'
import { PageTextCreateManySchema } from '../schemas/createManyPageText.schema'
import { PageTextCreateOneSchema } from '../schemas/createOnePageText.schema'
import { PageTextDeleteManySchema } from '../schemas/deleteManyPageText.schema'
import { PageTextDeleteOneSchema } from '../schemas/deleteOnePageText.schema'
import { PageTextFindFirstSchema } from '../schemas/findFirstPageText.schema'
import { PageTextFindManySchema } from '../schemas/findManyPageText.schema'
import { PageTextFindUniqueSchema } from '../schemas/findUniquePageText.schema'
import { PageTextGroupBySchema } from '../schemas/groupByPageText.schema'
import { PageTextUpdateManySchema } from '../schemas/updateManyPageText.schema'
import { PageTextUpdateOneSchema } from '../schemas/updateOnePageText.schema'
import { PageTextUpsertSchema } from '../schemas/upsertOnePageText.schema'

export const pagetextsRouter = t.router({
  aggregatePageText: shieldedProcedure
    .input(PageTextAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePageText = await ctx.prisma.pageText.aggregate(input)
      return aggregatePageText
    }),
  createManyPageText: shieldedProcedure
    .input(PageTextCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPageText = await ctx.prisma.pageText.createMany(input)
      return createManyPageText
    }),
  createOnePageText: shieldedProcedure
    .input(PageTextCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePageText = await ctx.prisma.pageText.create(input)
      return createOnePageText
    }),
  deleteManyPageText: shieldedProcedure
    .input(PageTextDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPageText = await ctx.prisma.pageText.deleteMany(input)
      return deleteManyPageText
    }),
  deleteOnePageText: shieldedProcedure
    .input(PageTextDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePageText = await ctx.prisma.pageText.delete(input)
      return deleteOnePageText
    }),
  findFirstPageText: shieldedProcedure
    .input(PageTextFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPageText = await ctx.prisma.pageText.findFirst(input)
      return findFirstPageText
    }),
  findFirstPageTextOrThrow: shieldedProcedure
    .input(PageTextFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPageTextOrThrow =
        await ctx.prisma.pageText.findFirstOrThrow(input)
      return findFirstPageTextOrThrow
    }),
  findManyPageText: shieldedProcedure
    .input(PageTextFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPageText = await ctx.prisma.pageText.findMany(input)
      return findManyPageText
    }),
  findUniquePageText: shieldedProcedure
    .input(PageTextFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePageText = await ctx.prisma.pageText.findUnique(input)
      return findUniquePageText
    }),
  findUniquePageTextOrThrow: shieldedProcedure
    .input(PageTextFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePageTextOrThrow =
        await ctx.prisma.pageText.findUniqueOrThrow(input)
      return findUniquePageTextOrThrow
    }),
  groupByPageText: shieldedProcedure
    .input(PageTextGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPageText = await ctx.prisma.pageText.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByPageText
    }),
  updateManyPageText: shieldedProcedure
    .input(PageTextUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPageText = await ctx.prisma.pageText.updateMany(input)
      return updateManyPageText
    }),
  updateOnePageText: shieldedProcedure
    .input(PageTextUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePageText = await ctx.prisma.pageText.update(input)
      return updateOnePageText
    }),
  upsertOnePageText: shieldedProcedure
    .input(PageTextUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePageText = await ctx.prisma.pageText.upsert(input)
      return upsertOnePageText
    }),
})

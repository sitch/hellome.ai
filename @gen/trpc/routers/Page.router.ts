import { t, shieldedProcedure } from './helpers/createRouter'
import { PageAggregateSchema } from '../schemas/aggregatePage.schema'
import { PageCreateManySchema } from '../schemas/createManyPage.schema'
import { PageCreateOneSchema } from '../schemas/createOnePage.schema'
import { PageDeleteManySchema } from '../schemas/deleteManyPage.schema'
import { PageDeleteOneSchema } from '../schemas/deleteOnePage.schema'
import { PageFindFirstSchema } from '../schemas/findFirstPage.schema'
import { PageFindManySchema } from '../schemas/findManyPage.schema'
import { PageFindUniqueSchema } from '../schemas/findUniquePage.schema'
import { PageGroupBySchema } from '../schemas/groupByPage.schema'
import { PageUpdateManySchema } from '../schemas/updateManyPage.schema'
import { PageUpdateOneSchema } from '../schemas/updateOnePage.schema'
import { PageUpsertSchema } from '../schemas/upsertOnePage.schema'

export const pagesRouter = t.router({
  aggregatePage: shieldedProcedure
    .input(PageAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePage = await ctx.prisma.page.aggregate(input)
      return aggregatePage
    }),
  createManyPage: shieldedProcedure
    .input(PageCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPage = await ctx.prisma.page.createMany(input)
      return createManyPage
    }),
  createOnePage: shieldedProcedure
    .input(PageCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePage = await ctx.prisma.page.create(input)
      return createOnePage
    }),
  deleteManyPage: shieldedProcedure
    .input(PageDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPage = await ctx.prisma.page.deleteMany(input)
      return deleteManyPage
    }),
  deleteOnePage: shieldedProcedure
    .input(PageDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePage = await ctx.prisma.page.delete(input)
      return deleteOnePage
    }),
  findFirstPage: shieldedProcedure
    .input(PageFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPage = await ctx.prisma.page.findFirst(input)
      return findFirstPage
    }),
  findFirstPageOrThrow: shieldedProcedure
    .input(PageFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPageOrThrow = await ctx.prisma.page.findFirstOrThrow(input)
      return findFirstPageOrThrow
    }),
  findManyPage: shieldedProcedure
    .input(PageFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPage = await ctx.prisma.page.findMany(input)
      return findManyPage
    }),
  findUniquePage: shieldedProcedure
    .input(PageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePage = await ctx.prisma.page.findUnique(input)
      return findUniquePage
    }),
  findUniquePageOrThrow: shieldedProcedure
    .input(PageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePageOrThrow = await ctx.prisma.page.findUniqueOrThrow(
        input
      )
      return findUniquePageOrThrow
    }),
  groupByPage: shieldedProcedure
    .input(PageGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPage = await ctx.prisma.page.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByPage
    }),
  updateManyPage: shieldedProcedure
    .input(PageUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPage = await ctx.prisma.page.updateMany(input)
      return updateManyPage
    }),
  updateOnePage: shieldedProcedure
    .input(PageUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePage = await ctx.prisma.page.update(input)
      return updateOnePage
    }),
  upsertOnePage: shieldedProcedure
    .input(PageUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePage = await ctx.prisma.page.upsert(input)
      return upsertOnePage
    }),
})

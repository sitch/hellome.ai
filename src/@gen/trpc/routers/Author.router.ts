import { t, shieldedProcedure } from "./helpers/createRouter";
import { AuthorAggregateSchema } from "../schemas/aggregateAuthor.schema";
import { AuthorCreateManySchema } from "../schemas/createManyAuthor.schema";
import { AuthorCreateOneSchema } from "../schemas/createOneAuthor.schema";
import { AuthorDeleteManySchema } from "../schemas/deleteManyAuthor.schema";
import { AuthorDeleteOneSchema } from "../schemas/deleteOneAuthor.schema";
import { AuthorFindFirstSchema } from "../schemas/findFirstAuthor.schema";
import { AuthorFindManySchema } from "../schemas/findManyAuthor.schema";
import { AuthorFindUniqueSchema } from "../schemas/findUniqueAuthor.schema";
import { AuthorGroupBySchema } from "../schemas/groupByAuthor.schema";
import { AuthorUpdateManySchema } from "../schemas/updateManyAuthor.schema";
import { AuthorUpdateOneSchema } from "../schemas/updateOneAuthor.schema";
import { AuthorUpsertSchema } from "../schemas/upsertOneAuthor.schema";

export const authorsRouter = t.router({
  aggregateAuthor: shieldedProcedure
    .input(AuthorAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAuthor = await ctx.prisma.author.aggregate(input);
      return aggregateAuthor;
    }),
  createManyAuthor: shieldedProcedure
    .input(AuthorCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAuthor = await ctx.prisma.author.createMany(input);
      return createManyAuthor;
    }),
  createOneAuthor: shieldedProcedure
    .input(AuthorCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAuthor = await ctx.prisma.author.create(input);
      return createOneAuthor;
    }),
  deleteManyAuthor: shieldedProcedure
    .input(AuthorDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAuthor = await ctx.prisma.author.deleteMany(input);
      return deleteManyAuthor;
    }),
  deleteOneAuthor: shieldedProcedure
    .input(AuthorDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAuthor = await ctx.prisma.author.delete(input);
      return deleteOneAuthor;
    }),
  findFirstAuthor: shieldedProcedure
    .input(AuthorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAuthor = await ctx.prisma.author.findFirst(input);
      return findFirstAuthor;
    }),
  findFirstAuthorOrThrow: shieldedProcedure
    .input(AuthorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAuthorOrThrow = await ctx.prisma.author.findFirstOrThrow(input);
      return findFirstAuthorOrThrow;
    }),
  findManyAuthor: shieldedProcedure
    .input(AuthorFindManySchema).query(async ({ ctx, input }) => {
      const findManyAuthor = await ctx.prisma.author.findMany(input);
      return findManyAuthor;
    }),
  findUniqueAuthor: shieldedProcedure
    .input(AuthorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAuthor = await ctx.prisma.author.findUnique(input);
      return findUniqueAuthor;
    }),
  findUniqueAuthorOrThrow: shieldedProcedure
    .input(AuthorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAuthorOrThrow = await ctx.prisma.author.findUniqueOrThrow(input);
      return findUniqueAuthorOrThrow;
    }),
  groupByAuthor: shieldedProcedure
    .input(AuthorGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAuthor = await ctx.prisma.author.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAuthor;
    }),
  updateManyAuthor: shieldedProcedure
    .input(AuthorUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAuthor = await ctx.prisma.author.updateMany(input);
      return updateManyAuthor;
    }),
  updateOneAuthor: shieldedProcedure
    .input(AuthorUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAuthor = await ctx.prisma.author.update(input);
      return updateOneAuthor;
    }),
  upsertOneAuthor: shieldedProcedure
    .input(AuthorUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAuthor = await ctx.prisma.author.upsert(input);
      return upsertOneAuthor;
    }),

}) 

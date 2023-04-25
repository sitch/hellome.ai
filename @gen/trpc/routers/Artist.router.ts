import { t, shieldedProcedure } from "./helpers/createRouter";
import { ArtistAggregateSchema } from "../schemas/aggregateArtist.schema";
import { ArtistCreateManySchema } from "../schemas/createManyArtist.schema";
import { ArtistCreateOneSchema } from "../schemas/createOneArtist.schema";
import { ArtistDeleteManySchema } from "../schemas/deleteManyArtist.schema";
import { ArtistDeleteOneSchema } from "../schemas/deleteOneArtist.schema";
import { ArtistFindFirstSchema } from "../schemas/findFirstArtist.schema";
import { ArtistFindManySchema } from "../schemas/findManyArtist.schema";
import { ArtistFindUniqueSchema } from "../schemas/findUniqueArtist.schema";
import { ArtistGroupBySchema } from "../schemas/groupByArtist.schema";
import { ArtistUpdateManySchema } from "../schemas/updateManyArtist.schema";
import { ArtistUpdateOneSchema } from "../schemas/updateOneArtist.schema";
import { ArtistUpsertSchema } from "../schemas/upsertOneArtist.schema";

export const artistsRouter = t.router({
  aggregateArtist: shieldedProcedure
    .input(ArtistAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateArtist = await ctx.prisma.artist.aggregate(input);
      return aggregateArtist;
    }),
  createManyArtist: shieldedProcedure
    .input(ArtistCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyArtist = await ctx.prisma.artist.createMany(input);
      return createManyArtist;
    }),
  createOneArtist: shieldedProcedure
    .input(ArtistCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneArtist = await ctx.prisma.artist.create(input);
      return createOneArtist;
    }),
  deleteManyArtist: shieldedProcedure
    .input(ArtistDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyArtist = await ctx.prisma.artist.deleteMany(input);
      return deleteManyArtist;
    }),
  deleteOneArtist: shieldedProcedure
    .input(ArtistDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneArtist = await ctx.prisma.artist.delete(input);
      return deleteOneArtist;
    }),
  findFirstArtist: shieldedProcedure
    .input(ArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtist = await ctx.prisma.artist.findFirst(input);
      return findFirstArtist;
    }),
  findFirstArtistOrThrow: shieldedProcedure
    .input(ArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistOrThrow = await ctx.prisma.artist.findFirstOrThrow(input);
      return findFirstArtistOrThrow;
    }),
  findManyArtist: shieldedProcedure
    .input(ArtistFindManySchema).query(async ({ ctx, input }) => {
      const findManyArtist = await ctx.prisma.artist.findMany(input);
      return findManyArtist;
    }),
  findUniqueArtist: shieldedProcedure
    .input(ArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtist = await ctx.prisma.artist.findUnique(input);
      return findUniqueArtist;
    }),
  findUniqueArtistOrThrow: shieldedProcedure
    .input(ArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistOrThrow = await ctx.prisma.artist.findUniqueOrThrow(input);
      return findUniqueArtistOrThrow;
    }),
  groupByArtist: shieldedProcedure
    .input(ArtistGroupBySchema).query(async ({ ctx, input }) => {
      const groupByArtist = await ctx.prisma.artist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByArtist;
    }),
  updateManyArtist: shieldedProcedure
    .input(ArtistUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyArtist = await ctx.prisma.artist.updateMany(input);
      return updateManyArtist;
    }),
  updateOneArtist: shieldedProcedure
    .input(ArtistUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneArtist = await ctx.prisma.artist.update(input);
      return updateOneArtist;
    }),
  upsertOneArtist: shieldedProcedure
    .input(ArtistUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneArtist = await ctx.prisma.artist.upsert(input);
      return upsertOneArtist;
    }),

}) 

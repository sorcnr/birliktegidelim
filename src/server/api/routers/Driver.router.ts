import { t, publicProcedure } from "./helpers/createRouter";
import { DriverAggregateSchema } from "../schemas/aggregateDriver.schema";
import { DriverCreateOneSchema } from "../schemas/createOneDriver.schema";
import { DriverDeleteManySchema } from "../schemas/deleteManyDriver.schema";
import { DriverDeleteOneSchema } from "../schemas/deleteOneDriver.schema";
import { DriverFindFirstSchema } from "../schemas/findFirstDriver.schema";
import { DriverFindManySchema } from "../schemas/findManyDriver.schema";
import { DriverFindUniqueSchema } from "../schemas/findUniqueDriver.schema";
import { DriverGroupBySchema } from "../schemas/groupByDriver.schema";
import { DriverUpdateManySchema } from "../schemas/updateManyDriver.schema";
import { DriverUpdateOneSchema } from "../schemas/updateOneDriver.schema";
import { DriverUpsertSchema } from "../schemas/upsertOneDriver.schema";

export const driversRouter = t.createTRPCRouter({
  aggregateDriver: publicProcedure
    .input(DriverAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDriver = await ctx.prisma.driver.aggregate(input);
      return aggregateDriver;
    }),
  createOneDriver: publicProcedure
    .input(DriverCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDriver = await ctx.prisma.driver.create(input);
      return createOneDriver;
    }),
  deleteManyDriver: publicProcedure
    .input(DriverDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDriver = await ctx.prisma.driver.deleteMany(input);
      return deleteManyDriver;
    }),
  deleteOneDriver: publicProcedure
    .input(DriverDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDriver = await ctx.prisma.driver.delete(input);
      return deleteOneDriver;
    }),
  findFirstDriver: publicProcedure
    .input(DriverFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDriver = await ctx.prisma.driver.findFirst(input);
      return findFirstDriver;
    }),
  findFirstDriverOrThrow: publicProcedure
    .input(DriverFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDriverOrThrow = await ctx.prisma.driver.findFirstOrThrow(input);
      return findFirstDriverOrThrow;
    }),
  findManyDriver: publicProcedure
    .input(DriverFindManySchema).query(async ({ ctx, input }) => {
      const findManyDriver = await ctx.prisma.driver.findMany(input);
      return findManyDriver;
    }),
  findUniqueDriver: publicProcedure
    .input(DriverFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDriver = await ctx.prisma.driver.findUnique(input);
      return findUniqueDriver;
    }),
  findUniqueDriverOrThrow: publicProcedure
    .input(DriverFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDriverOrThrow = await ctx.prisma.driver.findUniqueOrThrow(input);
      return findUniqueDriverOrThrow;
    }),
  groupByDriver: publicProcedure
    .input(DriverGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDriver = await ctx.prisma.driver.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDriver;
    }),
  updateManyDriver: publicProcedure
    .input(DriverUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDriver = await ctx.prisma.driver.updateMany(input);
      return updateManyDriver;
    }),
  updateOneDriver: publicProcedure
    .input(DriverUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDriver = await ctx.prisma.driver.update(input);
      return updateOneDriver;
    }),
  upsertOneDriver: publicProcedure
    .input(DriverUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDriver = await ctx.prisma.driver.upsert(input);
      return upsertOneDriver;
    }),

}) 

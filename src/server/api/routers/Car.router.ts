import { t, publicProcedure } from "./helpers/createRouter";
import { CarAggregateSchema } from "../schemas/aggregateCar.schema";
import { CarCreateOneSchema } from "../schemas/createOneCar.schema";
import { CarDeleteManySchema } from "../schemas/deleteManyCar.schema";
import { CarDeleteOneSchema } from "../schemas/deleteOneCar.schema";
import { CarFindFirstSchema } from "../schemas/findFirstCar.schema";
import { CarFindManySchema } from "../schemas/findManyCar.schema";
import { CarFindUniqueSchema } from "../schemas/findUniqueCar.schema";
import { CarGroupBySchema } from "../schemas/groupByCar.schema";
import { CarUpdateManySchema } from "../schemas/updateManyCar.schema";
import { CarUpdateOneSchema } from "../schemas/updateOneCar.schema";
import { CarUpsertSchema } from "../schemas/upsertOneCar.schema";

export const carsRouter = t.createTRPCRouter({
  aggregateCar: publicProcedure
    .input(CarAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateCar = await ctx.prisma.car.aggregate(input);
      return aggregateCar;
    }),
  createOneCar: publicProcedure
    .input(CarCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCar = await ctx.prisma.car.create(input);
      return createOneCar;
    }),
  deleteManyCar: publicProcedure
    .input(CarDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyCar = await ctx.prisma.car.deleteMany(input);
      return deleteManyCar;
    }),
  deleteOneCar: publicProcedure
    .input(CarDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCar = await ctx.prisma.car.delete(input);
      return deleteOneCar;
    }),
  findFirstCar: publicProcedure
    .input(CarFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCar = await ctx.prisma.car.findFirst(input);
      return findFirstCar;
    }),
  findFirstCarOrThrow: publicProcedure
    .input(CarFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCarOrThrow = await ctx.prisma.car.findFirstOrThrow(input);
      return findFirstCarOrThrow;
    }),
  findManyCar: publicProcedure
    .input(CarFindManySchema).query(async ({ ctx, input }) => {
      const findManyCar = await ctx.prisma.car.findMany(input);
      return findManyCar;
    }),
  findUniqueCar: publicProcedure
    .input(CarFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCar = await ctx.prisma.car.findUnique(input);
      return findUniqueCar;
    }),
  findUniqueCarOrThrow: publicProcedure
    .input(CarFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCarOrThrow = await ctx.prisma.car.findUniqueOrThrow(input);
      return findUniqueCarOrThrow;
    }),
  groupByCar: publicProcedure
    .input(CarGroupBySchema).query(async ({ ctx, input }) => {
      const groupByCar = await ctx.prisma.car.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCar;
    }),
  updateManyCar: publicProcedure
    .input(CarUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyCar = await ctx.prisma.car.updateMany(input);
      return updateManyCar;
    }),
  updateOneCar: publicProcedure
    .input(CarUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCar = await ctx.prisma.car.update(input);
      return updateOneCar;
    }),
  upsertOneCar: publicProcedure
    .input(CarUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCar = await ctx.prisma.car.upsert(input);
      return upsertOneCar;
    }),

}) 

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const workRouter = createTRPCRouter({
  getByDriver: publicProcedure.input(z.object({ userId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.work.findMany(
        {
          where: { driverId: input.userId }
        }
      )
    }),
  getAllDrivers: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.driver.findMany()
    }),
  getDriverById: publicProcedure.input(z.object({ driverId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.driver.findFirst({
        where: {
          id: input.driverId
        }
      })
    }),
  getCarById: publicProcedure.input(z.object({ carId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.car.findFirst({
        where: { id: input.carId }
      })
    }),
  getAllCars: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.car.findMany()
  }),
  getExpensesByDriver: publicProcedure.input(z.object({ DriverId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.expense.findMany(
        {
          where: { driverId: input.DriverId }
        }
      )
    }),
  //addWork: publicProcedure.input(z.object())
  getExpensesAndWork: publicProcedure.input(z.object({ driverId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.driver.findUnique({
        where: { id: input.driverId },
        include: {
          Expense: true,
          works: true,
        },
      })
    }),
  dailyReport: publicProcedure.input(z.object({ startDate: z.date(), endDate: z.date() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.driver.findMany({

        include: {
          Expense: {
            where: {
              createdAt: {
                gte: input.startDate,
                lte: input.endDate,
              }
            }
          },
          works: {
            where: {
              createdAt: {
                gte: input.startDate,
                lte: input.endDate,
              }
            }
          },
          stops: {
            where: {
              createdAt: {
                gte: input.startDate,
                lte: input.endDate,
              }
            }
          },
    }})
    }),
}
)
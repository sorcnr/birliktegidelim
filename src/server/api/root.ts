import { createTRPCRouter } from "~/server/api/trpc";

import { carsRouter } from "./routers/Car.router";
import { driversRouter } from "./routers/Driver.router";
//import { expensesRouter } from "./routers/Expense.router";
import { worksRouter } from "./routers/Work.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  //example: exampleRouter,
  car: carsRouter,
  driver: driversRouter,
  //expence: expensesRouter,
  work: worksRouter

});

// export type definition of API
export type AppRouter = typeof appRouter;

import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    carId: z.literal(true).optional(),
    driverId: z.literal(true).optional(),
    cost: z.literal(true).optional(),
  })
  .strict();

export const ExpenseAvgAggregateInputObjectSchema = Schema;

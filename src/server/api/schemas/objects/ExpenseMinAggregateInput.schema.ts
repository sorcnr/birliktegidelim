import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    carId: z.literal(true).optional(),
    driverId: z.literal(true).optional(),
    cost: z.literal(true).optional(),
    description: z.literal(true).optional(),
  })
  .strict();

export const ExpenseMinAggregateInputObjectSchema = Schema;

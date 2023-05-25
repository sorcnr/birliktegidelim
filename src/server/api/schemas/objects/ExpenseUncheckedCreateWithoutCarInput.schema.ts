import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutCarInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    driverId: z.number(),
    cost: z.number(),
    description: z.string(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutCarInputObjectSchema = Schema;

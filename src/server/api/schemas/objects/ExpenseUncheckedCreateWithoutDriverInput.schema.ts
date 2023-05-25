import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutDriverInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    carId: z.number(),
    cost: z.number(),
    description: z.string(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutDriverInputObjectSchema = Schema;

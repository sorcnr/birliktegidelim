import { z } from "zod";
import { CarCreateNestedOneWithoutExpenseInputObjectSchema } from "./CarCreateNestedOneWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateWithoutDriverInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    cost: z.number(),
    description: z.string(),
    car: z.lazy(() => CarCreateNestedOneWithoutExpenseInputObjectSchema),
  })
  .strict();

export const ExpenseCreateWithoutDriverInputObjectSchema = Schema;

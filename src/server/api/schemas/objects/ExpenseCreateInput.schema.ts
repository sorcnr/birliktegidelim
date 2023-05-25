import { z } from "zod";
import { CarCreateNestedOneWithoutExpenseInputObjectSchema } from "./CarCreateNestedOneWithoutExpenseInput.schema";
import { DriverCreateNestedOneWithoutExpenseInputObjectSchema } from "./DriverCreateNestedOneWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    cost: z.number(),
    description: z.string(),
    car: z.lazy(() => CarCreateNestedOneWithoutExpenseInputObjectSchema),
    driver: z.lazy(() => DriverCreateNestedOneWithoutExpenseInputObjectSchema),
  })
  .strict();

export const ExpenseCreateInputObjectSchema = Schema;

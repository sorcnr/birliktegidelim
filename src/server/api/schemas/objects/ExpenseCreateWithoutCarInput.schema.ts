import { z } from "zod";
import { DriverCreateNestedOneWithoutExpenseInputObjectSchema } from "./DriverCreateNestedOneWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateWithoutCarInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    cost: z.number(),
    description: z.string(),
    driver: z.lazy(() => DriverCreateNestedOneWithoutExpenseInputObjectSchema),
  })
  .strict();

export const ExpenseCreateWithoutCarInputObjectSchema = Schema;

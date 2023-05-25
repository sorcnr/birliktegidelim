import { z } from "zod";
import { WorkCreateNestedManyWithoutCarInputObjectSchema } from "./WorkCreateNestedManyWithoutCarInput.schema";
import { ExpenseCreateNestedManyWithoutCarInputObjectSchema } from "./ExpenseCreateNestedManyWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateWithoutDriversInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    color: z.string(),
    image: z.string(),
    available: z.boolean().optional(),
    works: z
      .lazy(() => WorkCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarCreateWithoutDriversInputObjectSchema = Schema;

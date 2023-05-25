import { z } from "zod";
import { DriverCreateNestedManyWithoutCarsInputObjectSchema } from "./DriverCreateNestedManyWithoutCarsInput.schema";
import { ExpenseCreateNestedManyWithoutCarInputObjectSchema } from "./ExpenseCreateNestedManyWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateWithoutWorksInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    color: z.string(),
    image: z.string(),
    available: z.boolean().optional(),
    drivers: z
      .lazy(() => DriverCreateNestedManyWithoutCarsInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarCreateWithoutWorksInputObjectSchema = Schema;

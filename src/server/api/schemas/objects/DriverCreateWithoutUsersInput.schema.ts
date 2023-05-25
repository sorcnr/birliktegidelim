import { z } from "zod";
import { CarCreateNestedManyWithoutDriversInputObjectSchema } from "./CarCreateNestedManyWithoutDriversInput.schema";
import { WorkCreateNestedManyWithoutDriverInputObjectSchema } from "./WorkCreateNestedManyWithoutDriverInput.schema";
import { ExpenseCreateNestedManyWithoutDriverInputObjectSchema } from "./ExpenseCreateNestedManyWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateWithoutUsersInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    userId: z.string(),
    name: z.string(),
    age: z.number(),
    image: z.string(),
    cars: z
      .lazy(() => CarCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverCreateWithoutUsersInputObjectSchema = Schema;

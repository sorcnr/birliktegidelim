import { z } from "zod";
import { WorkCreateNestedManyWithoutDriverInputObjectSchema } from "./WorkCreateNestedManyWithoutDriverInput.schema";
import { ExpenseCreateNestedManyWithoutDriverInputObjectSchema } from "./ExpenseCreateNestedManyWithoutDriverInput.schema";
import { UserCreateNestedManyWithoutDriversInputObjectSchema } from "./UserCreateNestedManyWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateWithoutCarsInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    userId: z.string(),
    name: z.string(),
    age: z.number(),
    image: z.string(),
    works: z
      .lazy(() => WorkCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverCreateWithoutCarsInputObjectSchema = Schema;

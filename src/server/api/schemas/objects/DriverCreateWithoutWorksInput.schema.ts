import { z } from "zod";
import { CarCreateNestedManyWithoutDriversInputObjectSchema } from "./CarCreateNestedManyWithoutDriversInput.schema";
import { ExpenseCreateNestedManyWithoutDriverInputObjectSchema } from "./ExpenseCreateNestedManyWithoutDriverInput.schema";
import { UserCreateNestedManyWithoutDriversInputObjectSchema } from "./UserCreateNestedManyWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateWithoutWorksInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    userId: z.string(),
    name: z.string(),
    age: z.number(),
    image: z.string(),
    cars: z
      .lazy(() => CarCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverCreateWithoutWorksInputObjectSchema = Schema;

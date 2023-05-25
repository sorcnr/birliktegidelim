import { z } from "zod";
import { CarUncheckedCreateNestedManyWithoutDriversInputObjectSchema } from "./CarUncheckedCreateNestedManyWithoutDriversInput.schema";
import { WorkUncheckedCreateNestedManyWithoutDriverInputObjectSchema } from "./WorkUncheckedCreateNestedManyWithoutDriverInput.schema";
import { ExpenseUncheckedCreateNestedManyWithoutDriverInputObjectSchema } from "./ExpenseUncheckedCreateNestedManyWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    userId: z.string(),
    name: z.string(),
    age: z.number(),
    image: z.string(),
    cars: z
      .lazy(() => CarUncheckedCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkUncheckedCreateNestedManyWithoutDriverInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(
        () => ExpenseUncheckedCreateNestedManyWithoutDriverInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DriverUncheckedCreateWithoutUsersInputObjectSchema = Schema;

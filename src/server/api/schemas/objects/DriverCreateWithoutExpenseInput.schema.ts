import { z } from "zod";
import { CarCreateNestedManyWithoutDriversInputObjectSchema } from "./CarCreateNestedManyWithoutDriversInput.schema";
import { WorkCreateNestedManyWithoutDriverInputObjectSchema } from "./WorkCreateNestedManyWithoutDriverInput.schema";
import { UserCreateNestedManyWithoutDriversInputObjectSchema } from "./UserCreateNestedManyWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateWithoutExpenseInput> = z
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
    users: z
      .lazy(() => UserCreateNestedManyWithoutDriversInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverCreateWithoutExpenseInputObjectSchema = Schema;

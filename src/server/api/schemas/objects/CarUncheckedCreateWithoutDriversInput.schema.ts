import { z } from "zod";
import { WorkUncheckedCreateNestedManyWithoutCarInputObjectSchema } from "./WorkUncheckedCreateNestedManyWithoutCarInput.schema";
import { ExpenseUncheckedCreateNestedManyWithoutCarInputObjectSchema } from "./ExpenseUncheckedCreateNestedManyWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUncheckedCreateWithoutDriversInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    color: z.string(),
    image: z.string(),
    available: z.boolean().optional(),
    works: z
      .lazy(() => WorkUncheckedCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseUncheckedCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarUncheckedCreateWithoutDriversInputObjectSchema = Schema;

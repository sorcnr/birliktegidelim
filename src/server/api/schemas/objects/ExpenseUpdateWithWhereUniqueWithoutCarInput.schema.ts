import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithoutCarInputObjectSchema } from "./ExpenseUpdateWithoutCarInput.schema";
import { ExpenseUncheckedUpdateWithoutCarInputObjectSchema } from "./ExpenseUncheckedUpdateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutCarInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ExpenseUpdateWithoutCarInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpdateWithWhereUniqueWithoutCarInputObjectSchema = Schema;

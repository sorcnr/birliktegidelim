import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithoutDriverInputObjectSchema } from "./ExpenseUpdateWithoutDriverInput.schema";
import { ExpenseUncheckedUpdateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedUpdateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutDriverInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExpenseUpdateWithoutDriverInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutDriverInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpdateWithWhereUniqueWithoutDriverInputObjectSchema =
  Schema;

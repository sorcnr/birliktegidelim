import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithoutCarInputObjectSchema } from "./ExpenseUpdateWithoutCarInput.schema";
import { ExpenseUncheckedUpdateWithoutCarInputObjectSchema } from "./ExpenseUncheckedUpdateWithoutCarInput.schema";
import { ExpenseCreateWithoutCarInputObjectSchema } from "./ExpenseCreateWithoutCarInput.schema";
import { ExpenseUncheckedCreateWithoutCarInputObjectSchema } from "./ExpenseUncheckedCreateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutCarInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ExpenseUpdateWithoutCarInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutCarInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpsertWithWhereUniqueWithoutCarInputObjectSchema = Schema;

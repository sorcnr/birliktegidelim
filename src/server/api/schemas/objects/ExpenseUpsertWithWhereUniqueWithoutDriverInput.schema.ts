import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithoutDriverInputObjectSchema } from "./ExpenseUpdateWithoutDriverInput.schema";
import { ExpenseUncheckedUpdateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedUpdateWithoutDriverInput.schema";
import { ExpenseCreateWithoutDriverInputObjectSchema } from "./ExpenseCreateWithoutDriverInput.schema";
import { ExpenseUncheckedCreateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedCreateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutDriverInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExpenseUpdateWithoutDriverInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutDriverInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExpenseCreateWithoutDriverInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutDriverInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpsertWithWhereUniqueWithoutDriverInputObjectSchema =
  Schema;

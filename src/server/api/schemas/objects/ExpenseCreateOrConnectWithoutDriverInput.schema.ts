import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseCreateWithoutDriverInputObjectSchema } from "./ExpenseCreateWithoutDriverInput.schema";
import { ExpenseUncheckedCreateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedCreateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateOrConnectWithoutDriverInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutDriverInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutDriverInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseCreateOrConnectWithoutDriverInputObjectSchema = Schema;

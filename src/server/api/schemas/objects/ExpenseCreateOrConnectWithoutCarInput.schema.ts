import { z } from "zod";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseCreateWithoutCarInputObjectSchema } from "./ExpenseCreateWithoutCarInput.schema";
import { ExpenseUncheckedCreateWithoutCarInputObjectSchema } from "./ExpenseUncheckedCreateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateOrConnectWithoutCarInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseCreateOrConnectWithoutCarInputObjectSchema = Schema;

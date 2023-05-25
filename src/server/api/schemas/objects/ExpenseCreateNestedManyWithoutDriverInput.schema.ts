import { z } from "zod";
import { ExpenseCreateWithoutDriverInputObjectSchema } from "./ExpenseCreateWithoutDriverInput.schema";
import { ExpenseUncheckedCreateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedCreateWithoutDriverInput.schema";
import { ExpenseCreateOrConnectWithoutDriverInputObjectSchema } from "./ExpenseCreateOrConnectWithoutDriverInput.schema";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseCreateNestedManyWithoutDriverInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutDriverInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutDriverInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutDriverInputObjectSchema),
        z
          .lazy(() => ExpenseUncheckedCreateWithoutDriverInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutDriverInputObjectSchema),
        z
          .lazy(() => ExpenseCreateOrConnectWithoutDriverInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExpenseCreateNestedManyWithoutDriverInputObjectSchema = Schema;

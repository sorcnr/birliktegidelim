import { z } from "zod";
import { ExpenseCreateWithoutCarInputObjectSchema } from "./ExpenseCreateWithoutCarInput.schema";
import { ExpenseUncheckedCreateWithoutCarInputObjectSchema } from "./ExpenseUncheckedCreateWithoutCarInput.schema";
import { ExpenseCreateOrConnectWithoutCarInputObjectSchema } from "./ExpenseCreateOrConnectWithoutCarInput.schema";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateNestedManyWithoutCarInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema),
          z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema).array(),
          z.lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema),
          z
            .lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExpenseCreateOrConnectWithoutCarInputObjectSchema),
          z
            .lazy(() => ExpenseCreateOrConnectWithoutCarInputObjectSchema)
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

export const ExpenseUncheckedCreateNestedManyWithoutCarInputObjectSchema =
  Schema;

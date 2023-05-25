import { z } from "zod";
import { ExpenseCreateWithoutCarInputObjectSchema } from "./ExpenseCreateWithoutCarInput.schema";
import { ExpenseUncheckedCreateWithoutCarInputObjectSchema } from "./ExpenseUncheckedCreateWithoutCarInput.schema";
import { ExpenseCreateOrConnectWithoutCarInputObjectSchema } from "./ExpenseCreateOrConnectWithoutCarInput.schema";
import { ExpenseUpsertWithWhereUniqueWithoutCarInputObjectSchema } from "./ExpenseUpsertWithWhereUniqueWithoutCarInput.schema";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithWhereUniqueWithoutCarInputObjectSchema } from "./ExpenseUpdateWithWhereUniqueWithoutCarInput.schema";
import { ExpenseUpdateManyWithWhereWithoutCarInputObjectSchema } from "./ExpenseUpdateManyWithWhereWithoutCarInput.schema";
import { ExpenseScalarWhereInputObjectSchema } from "./ExpenseScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithoutCarNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutCarInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutCarInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutCarInputObjectSchema),
        z.lazy(() => ExpenseCreateOrConnectWithoutCarInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutCarInputObjectSchema),
        z
          .lazy(() => ExpenseUpsertWithWhereUniqueWithoutCarInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutCarInputObjectSchema),
        z
          .lazy(() => ExpenseUpdateWithWhereUniqueWithoutCarInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutCarInputObjectSchema),
        z
          .lazy(() => ExpenseUpdateManyWithWhereWithoutCarInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExpenseUpdateManyWithoutCarNestedInputObjectSchema = Schema;

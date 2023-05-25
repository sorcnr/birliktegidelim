import { z } from "zod";
import { ExpenseCreateWithoutDriverInputObjectSchema } from "./ExpenseCreateWithoutDriverInput.schema";
import { ExpenseUncheckedCreateWithoutDriverInputObjectSchema } from "./ExpenseUncheckedCreateWithoutDriverInput.schema";
import { ExpenseCreateOrConnectWithoutDriverInputObjectSchema } from "./ExpenseCreateOrConnectWithoutDriverInput.schema";
import { ExpenseUpsertWithWhereUniqueWithoutDriverInputObjectSchema } from "./ExpenseUpsertWithWhereUniqueWithoutDriverInput.schema";
import { ExpenseWhereUniqueInputObjectSchema } from "./ExpenseWhereUniqueInput.schema";
import { ExpenseUpdateWithWhereUniqueWithoutDriverInputObjectSchema } from "./ExpenseUpdateWithWhereUniqueWithoutDriverInput.schema";
import { ExpenseUpdateManyWithWhereWithoutDriverInputObjectSchema } from "./ExpenseUpdateManyWithWhereWithoutDriverInput.schema";
import { ExpenseScalarWhereInputObjectSchema } from "./ExpenseScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithoutDriverNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ExpenseUpsertWithWhereUniqueWithoutDriverInputObjectSchema
        ),
        z
          .lazy(
            () => ExpenseUpsertWithWhereUniqueWithoutDriverInputObjectSchema
          )
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
        z.lazy(
          () => ExpenseUpdateWithWhereUniqueWithoutDriverInputObjectSchema
        ),
        z
          .lazy(
            () => ExpenseUpdateWithWhereUniqueWithoutDriverInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutDriverInputObjectSchema),
        z
          .lazy(() => ExpenseUpdateManyWithWhereWithoutDriverInputObjectSchema)
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

export const ExpenseUpdateManyWithoutDriverNestedInputObjectSchema = Schema;

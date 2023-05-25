import { z } from "zod";
import { CarCreateWithoutExpenseInputObjectSchema } from "./CarCreateWithoutExpenseInput.schema";
import { CarUncheckedCreateWithoutExpenseInputObjectSchema } from "./CarUncheckedCreateWithoutExpenseInput.schema";
import { CarCreateOrConnectWithoutExpenseInputObjectSchema } from "./CarCreateOrConnectWithoutExpenseInput.schema";
import { CarUpsertWithoutExpenseInputObjectSchema } from "./CarUpsertWithoutExpenseInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarUpdateWithoutExpenseInputObjectSchema } from "./CarUpdateWithoutExpenseInput.schema";
import { CarUncheckedUpdateWithoutExpenseInputObjectSchema } from "./CarUncheckedUpdateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutExpenseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutExpenseInputObjectSchema),
          z.lazy(() => CarUncheckedCreateWithoutExpenseInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CarCreateOrConnectWithoutExpenseInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => CarUpsertWithoutExpenseInputObjectSchema).optional(),
      connect: z.lazy(() => CarWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CarUpdateWithoutExpenseInputObjectSchema),
          z.lazy(() => CarUncheckedUpdateWithoutExpenseInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CarUpdateOneRequiredWithoutExpenseNestedInputObjectSchema = Schema;

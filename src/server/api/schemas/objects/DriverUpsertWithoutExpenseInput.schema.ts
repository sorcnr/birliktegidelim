import { z } from "zod";
import { DriverUpdateWithoutExpenseInputObjectSchema } from "./DriverUpdateWithoutExpenseInput.schema";
import { DriverUncheckedUpdateWithoutExpenseInputObjectSchema } from "./DriverUncheckedUpdateWithoutExpenseInput.schema";
import { DriverCreateWithoutExpenseInputObjectSchema } from "./DriverCreateWithoutExpenseInput.schema";
import { DriverUncheckedCreateWithoutExpenseInputObjectSchema } from "./DriverUncheckedCreateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpsertWithoutExpenseInput> = z
  .object({
    update: z.union([
      z.lazy(() => DriverUpdateWithoutExpenseInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutExpenseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DriverCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpsertWithoutExpenseInputObjectSchema = Schema;

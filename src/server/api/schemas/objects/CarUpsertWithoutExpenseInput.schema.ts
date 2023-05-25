import { z } from "zod";
import { CarUpdateWithoutExpenseInputObjectSchema } from "./CarUpdateWithoutExpenseInput.schema";
import { CarUncheckedUpdateWithoutExpenseInputObjectSchema } from "./CarUncheckedUpdateWithoutExpenseInput.schema";
import { CarCreateWithoutExpenseInputObjectSchema } from "./CarCreateWithoutExpenseInput.schema";
import { CarUncheckedCreateWithoutExpenseInputObjectSchema } from "./CarUncheckedCreateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpsertWithoutExpenseInput> = z
  .object({
    update: z.union([
      z.lazy(() => CarUpdateWithoutExpenseInputObjectSchema),
      z.lazy(() => CarUncheckedUpdateWithoutExpenseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CarCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const CarUpsertWithoutExpenseInputObjectSchema = Schema;

import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";
import { DriverUncheckedUpdateManyWithoutCarsNestedInputObjectSchema } from "./DriverUncheckedUpdateManyWithoutCarsNestedInput.schema";
import { WorkUncheckedUpdateManyWithoutCarNestedInputObjectSchema } from "./WorkUncheckedUpdateManyWithoutCarNestedInput.schema";
import { ExpenseUncheckedUpdateManyWithoutCarNestedInputObjectSchema } from "./ExpenseUncheckedUpdateManyWithoutCarNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    brand: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    model: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    year: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    color: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    available: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    drivers: z
      .lazy(() => DriverUncheckedUpdateManyWithoutCarsNestedInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkUncheckedUpdateManyWithoutCarNestedInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseUncheckedUpdateManyWithoutCarNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarUncheckedUpdateInputObjectSchema = Schema;

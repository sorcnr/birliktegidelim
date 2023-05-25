import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { CarUpdateManyWithoutDriversNestedInputObjectSchema } from "./CarUpdateManyWithoutDriversNestedInput.schema";
import { ExpenseUpdateManyWithoutDriverNestedInputObjectSchema } from "./ExpenseUpdateManyWithoutDriverNestedInput.schema";
import { UserUpdateManyWithoutDriversNestedInputObjectSchema } from "./UserUpdateManyWithoutDriversNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateWithoutWorksInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    age: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cars: z
      .lazy(() => CarUpdateManyWithoutDriversNestedInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseUpdateManyWithoutDriverNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutDriversNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverUpdateWithoutWorksInputObjectSchema = Schema;

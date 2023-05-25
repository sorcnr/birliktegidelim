import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CarUncheckedUpdateManyWithoutDriversNestedInputObjectSchema } from "./CarUncheckedUpdateManyWithoutDriversNestedInput.schema";
import { WorkUncheckedUpdateManyWithoutDriverNestedInputObjectSchema } from "./WorkUncheckedUpdateManyWithoutDriverNestedInput.schema";
import { UserUncheckedUpdateManyWithoutDriversNestedInputObjectSchema } from "./UserUncheckedUpdateManyWithoutDriversNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUncheckedUpdateWithoutExpenseInput> = z
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
      .lazy(() => CarUncheckedUpdateManyWithoutDriversNestedInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkUncheckedUpdateManyWithoutDriverNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserUncheckedUpdateManyWithoutDriversNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverUncheckedUpdateWithoutExpenseInputObjectSchema = Schema;
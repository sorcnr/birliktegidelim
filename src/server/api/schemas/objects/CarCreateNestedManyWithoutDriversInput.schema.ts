import { z } from "zod";
import { CarCreateWithoutDriversInputObjectSchema } from "./CarCreateWithoutDriversInput.schema";
import { CarUncheckedCreateWithoutDriversInputObjectSchema } from "./CarUncheckedCreateWithoutDriversInput.schema";
import { CarCreateOrConnectWithoutDriversInputObjectSchema } from "./CarCreateOrConnectWithoutDriversInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateNestedManyWithoutDriversInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CarCreateWithoutDriversInputObjectSchema),
        z.lazy(() => CarCreateWithoutDriversInputObjectSchema).array(),
        z.lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema),
        z.lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CarCreateOrConnectWithoutDriversInputObjectSchema),
        z.lazy(() => CarCreateOrConnectWithoutDriversInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CarWhereUniqueInputObjectSchema),
        z.lazy(() => CarWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CarCreateNestedManyWithoutDriversInputObjectSchema = Schema;

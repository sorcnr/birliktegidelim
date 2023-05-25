import { z } from "zod";
import { DriverCreateWithoutCarsInputObjectSchema } from "./DriverCreateWithoutCarsInput.schema";
import { DriverUncheckedCreateWithoutCarsInputObjectSchema } from "./DriverUncheckedCreateWithoutCarsInput.schema";
import { DriverCreateOrConnectWithoutCarsInputObjectSchema } from "./DriverCreateOrConnectWithoutCarsInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUncheckedCreateNestedManyWithoutCarsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DriverCreateWithoutCarsInputObjectSchema),
          z.lazy(() => DriverCreateWithoutCarsInputObjectSchema).array(),
          z.lazy(() => DriverUncheckedCreateWithoutCarsInputObjectSchema),
          z
            .lazy(() => DriverUncheckedCreateWithoutCarsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DriverCreateOrConnectWithoutCarsInputObjectSchema),
          z
            .lazy(() => DriverCreateOrConnectWithoutCarsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DriverWhereUniqueInputObjectSchema),
          z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DriverUncheckedCreateNestedManyWithoutCarsInputObjectSchema =
  Schema;

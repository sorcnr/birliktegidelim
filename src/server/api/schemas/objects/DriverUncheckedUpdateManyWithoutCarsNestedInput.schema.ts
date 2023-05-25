import { z } from "zod";
import { DriverCreateWithoutCarsInputObjectSchema } from "./DriverCreateWithoutCarsInput.schema";
import { DriverUncheckedCreateWithoutCarsInputObjectSchema } from "./DriverUncheckedCreateWithoutCarsInput.schema";
import { DriverCreateOrConnectWithoutCarsInputObjectSchema } from "./DriverCreateOrConnectWithoutCarsInput.schema";
import { DriverUpsertWithWhereUniqueWithoutCarsInputObjectSchema } from "./DriverUpsertWithWhereUniqueWithoutCarsInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithWhereUniqueWithoutCarsInputObjectSchema } from "./DriverUpdateWithWhereUniqueWithoutCarsInput.schema";
import { DriverUpdateManyWithWhereWithoutCarsInputObjectSchema } from "./DriverUpdateManyWithWhereWithoutCarsInput.schema";
import { DriverScalarWhereInputObjectSchema } from "./DriverScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUncheckedUpdateManyWithoutCarsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => DriverUpsertWithWhereUniqueWithoutCarsInputObjectSchema),
          z
            .lazy(() => DriverUpsertWithWhereUniqueWithoutCarsInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DriverWhereUniqueInputObjectSchema),
          z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DriverWhereUniqueInputObjectSchema),
          z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DriverWhereUniqueInputObjectSchema),
          z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DriverWhereUniqueInputObjectSchema),
          z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DriverUpdateWithWhereUniqueWithoutCarsInputObjectSchema),
          z
            .lazy(() => DriverUpdateWithWhereUniqueWithoutCarsInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DriverUpdateManyWithWhereWithoutCarsInputObjectSchema),
          z
            .lazy(() => DriverUpdateManyWithWhereWithoutCarsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DriverScalarWhereInputObjectSchema),
          z.lazy(() => DriverScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DriverUncheckedUpdateManyWithoutCarsNestedInputObjectSchema =
  Schema;

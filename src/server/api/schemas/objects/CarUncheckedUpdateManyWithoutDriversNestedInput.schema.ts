import { z } from "zod";
import { CarCreateWithoutDriversInputObjectSchema } from "./CarCreateWithoutDriversInput.schema";
import { CarUncheckedCreateWithoutDriversInputObjectSchema } from "./CarUncheckedCreateWithoutDriversInput.schema";
import { CarCreateOrConnectWithoutDriversInputObjectSchema } from "./CarCreateOrConnectWithoutDriversInput.schema";
import { CarUpsertWithWhereUniqueWithoutDriversInputObjectSchema } from "./CarUpsertWithWhereUniqueWithoutDriversInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarUpdateWithWhereUniqueWithoutDriversInputObjectSchema } from "./CarUpdateWithWhereUniqueWithoutDriversInput.schema";
import { CarUpdateManyWithWhereWithoutDriversInputObjectSchema } from "./CarUpdateManyWithWhereWithoutDriversInput.schema";
import { CarScalarWhereInputObjectSchema } from "./CarScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUncheckedUpdateManyWithoutDriversNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutDriversInputObjectSchema),
          z.lazy(() => CarCreateWithoutDriversInputObjectSchema).array(),
          z.lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema),
          z
            .lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CarCreateOrConnectWithoutDriversInputObjectSchema),
          z
            .lazy(() => CarCreateOrConnectWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CarUpsertWithWhereUniqueWithoutDriversInputObjectSchema),
          z
            .lazy(() => CarUpsertWithWhereUniqueWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => CarWhereUniqueInputObjectSchema),
          z.lazy(() => CarWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CarWhereUniqueInputObjectSchema),
          z.lazy(() => CarWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CarWhereUniqueInputObjectSchema),
          z.lazy(() => CarWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CarWhereUniqueInputObjectSchema),
          z.lazy(() => CarWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CarUpdateWithWhereUniqueWithoutDriversInputObjectSchema),
          z
            .lazy(() => CarUpdateWithWhereUniqueWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CarUpdateManyWithWhereWithoutDriversInputObjectSchema),
          z
            .lazy(() => CarUpdateManyWithWhereWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CarScalarWhereInputObjectSchema),
          z.lazy(() => CarScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CarUncheckedUpdateManyWithoutDriversNestedInputObjectSchema =
  Schema;

import { z } from "zod";
import { DriverCreateWithoutUsersInputObjectSchema } from "./DriverCreateWithoutUsersInput.schema";
import { DriverUncheckedCreateWithoutUsersInputObjectSchema } from "./DriverUncheckedCreateWithoutUsersInput.schema";
import { DriverCreateOrConnectWithoutUsersInputObjectSchema } from "./DriverCreateOrConnectWithoutUsersInput.schema";
import { DriverUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from "./DriverUpsertWithWhereUniqueWithoutUsersInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from "./DriverUpdateWithWhereUniqueWithoutUsersInput.schema";
import { DriverUpdateManyWithWhereWithoutUsersInputObjectSchema } from "./DriverUpdateManyWithWhereWithoutUsersInput.schema";
import { DriverScalarWhereInputObjectSchema } from "./DriverScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DriverCreateWithoutUsersInputObjectSchema),
        z.lazy(() => DriverCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => DriverUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => DriverUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DriverCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => DriverCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DriverUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => DriverUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
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
        z.lazy(() => DriverUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => DriverUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DriverUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => DriverUpdateManyWithWhereWithoutUsersInputObjectSchema)
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

export const DriverUpdateManyWithoutUsersNestedInputObjectSchema = Schema;

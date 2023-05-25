import { z } from "zod";
import { DriverCreateWithoutUsersInputObjectSchema } from "./DriverCreateWithoutUsersInput.schema";
import { DriverUncheckedCreateWithoutUsersInputObjectSchema } from "./DriverUncheckedCreateWithoutUsersInput.schema";
import { DriverCreateOrConnectWithoutUsersInputObjectSchema } from "./DriverCreateOrConnectWithoutUsersInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateNestedManyWithoutUsersInput> = z
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
    connect: z
      .union([
        z.lazy(() => DriverWhereUniqueInputObjectSchema),
        z.lazy(() => DriverWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DriverCreateNestedManyWithoutUsersInputObjectSchema = Schema;

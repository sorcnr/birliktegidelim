import { z } from "zod";
import { UserCreateWithoutDriversInputObjectSchema } from "./UserCreateWithoutDriversInput.schema";
import { UserUncheckedCreateWithoutDriversInputObjectSchema } from "./UserUncheckedCreateWithoutDriversInput.schema";
import { UserCreateOrConnectWithoutDriversInputObjectSchema } from "./UserCreateOrConnectWithoutDriversInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutDriversInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDriversInputObjectSchema),
          z.lazy(() => UserCreateWithoutDriversInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutDriversInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutDriversInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutDriversInputObjectSchema =
  Schema;

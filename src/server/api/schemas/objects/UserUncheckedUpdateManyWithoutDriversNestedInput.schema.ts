import { z } from "zod";
import { UserCreateWithoutDriversInputObjectSchema } from "./UserCreateWithoutDriversInput.schema";
import { UserUncheckedCreateWithoutDriversInputObjectSchema } from "./UserUncheckedCreateWithoutDriversInput.schema";
import { UserCreateOrConnectWithoutDriversInputObjectSchema } from "./UserCreateOrConnectWithoutDriversInput.schema";
import { UserUpsertWithWhereUniqueWithoutDriversInputObjectSchema } from "./UserUpsertWithWhereUniqueWithoutDriversInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithWhereUniqueWithoutDriversInputObjectSchema } from "./UserUpdateWithWhereUniqueWithoutDriversInput.schema";
import { UserUpdateManyWithWhereWithoutDriversInputObjectSchema } from "./UserUpdateManyWithWhereWithoutDriversInput.schema";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutDriversNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutDriversInputObjectSchema
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutDriversInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithWhereUniqueWithoutDriversInputObjectSchema
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutDriversInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutDriversInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutDriversInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutDriversNestedInputObjectSchema =
  Schema;

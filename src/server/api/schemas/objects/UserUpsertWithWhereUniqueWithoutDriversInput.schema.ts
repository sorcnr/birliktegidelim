import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutDriversInputObjectSchema } from "./UserUpdateWithoutDriversInput.schema";
import { UserUncheckedUpdateWithoutDriversInputObjectSchema } from "./UserUncheckedUpdateWithoutDriversInput.schema";
import { UserCreateWithoutDriversInputObjectSchema } from "./UserCreateWithoutDriversInput.schema";
import { UserUncheckedCreateWithoutDriversInputObjectSchema } from "./UserUncheckedCreateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutDriversInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutDriversInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDriversInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDriversInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutDriversInputObjectSchema = Schema;

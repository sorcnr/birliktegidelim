import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutDriversInputObjectSchema } from "./UserCreateWithoutDriversInput.schema";
import { UserUncheckedCreateWithoutDriversInputObjectSchema } from "./UserUncheckedCreateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDriversInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDriversInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDriversInputObjectSchema = Schema;

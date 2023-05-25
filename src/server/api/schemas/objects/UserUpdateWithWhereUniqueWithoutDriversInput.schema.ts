import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutDriversInputObjectSchema } from "./UserUpdateWithoutDriversInput.schema";
import { UserUncheckedUpdateWithoutDriversInputObjectSchema } from "./UserUncheckedUpdateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutDriversInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutDriversInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutDriversInputObjectSchema = Schema;

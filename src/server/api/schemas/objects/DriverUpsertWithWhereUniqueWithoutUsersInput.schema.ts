import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutUsersInputObjectSchema } from "./DriverUpdateWithoutUsersInput.schema";
import { DriverUncheckedUpdateWithoutUsersInputObjectSchema } from "./DriverUncheckedUpdateWithoutUsersInput.schema";
import { DriverCreateWithoutUsersInputObjectSchema } from "./DriverCreateWithoutUsersInput.schema";
import { DriverUncheckedCreateWithoutUsersInputObjectSchema } from "./DriverUncheckedCreateWithoutUsersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DriverUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DriverCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;

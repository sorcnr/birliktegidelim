import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutUsersInputObjectSchema } from "./DriverUpdateWithoutUsersInput.schema";
import { DriverUncheckedUpdateWithoutUsersInputObjectSchema } from "./DriverUncheckedUpdateWithoutUsersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DriverUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;

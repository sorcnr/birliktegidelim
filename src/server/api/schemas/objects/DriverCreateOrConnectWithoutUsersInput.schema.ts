import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverCreateWithoutUsersInputObjectSchema } from "./DriverCreateWithoutUsersInput.schema";
import { DriverUncheckedCreateWithoutUsersInputObjectSchema } from "./DriverUncheckedCreateWithoutUsersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DriverCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DriverCreateOrConnectWithoutUsersInputObjectSchema = Schema;

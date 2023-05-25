import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarCreateWithoutDriversInputObjectSchema } from "./CarCreateWithoutDriversInput.schema";
import { CarUncheckedCreateWithoutDriversInputObjectSchema } from "./CarUncheckedCreateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateOrConnectWithoutDriversInput> = z
  .object({
    where: z.lazy(() => CarWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CarCreateWithoutDriversInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const CarCreateOrConnectWithoutDriversInputObjectSchema = Schema;

import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarUpdateWithoutDriversInputObjectSchema } from "./CarUpdateWithoutDriversInput.schema";
import { CarUncheckedUpdateWithoutDriversInputObjectSchema } from "./CarUncheckedUpdateWithoutDriversInput.schema";
import { CarCreateWithoutDriversInputObjectSchema } from "./CarCreateWithoutDriversInput.schema";
import { CarUncheckedCreateWithoutDriversInputObjectSchema } from "./CarUncheckedCreateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpsertWithWhereUniqueWithoutDriversInput> = z
  .object({
    where: z.lazy(() => CarWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CarUpdateWithoutDriversInputObjectSchema),
      z.lazy(() => CarUncheckedUpdateWithoutDriversInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CarCreateWithoutDriversInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const CarUpsertWithWhereUniqueWithoutDriversInputObjectSchema = Schema;

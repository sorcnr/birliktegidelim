import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithoutDriverInputObjectSchema } from "./WorkUpdateWithoutDriverInput.schema";
import { WorkUncheckedUpdateWithoutDriverInputObjectSchema } from "./WorkUncheckedUpdateWithoutDriverInput.schema";
import { WorkCreateWithoutDriverInputObjectSchema } from "./WorkCreateWithoutDriverInput.schema";
import { WorkUncheckedCreateWithoutDriverInputObjectSchema } from "./WorkUncheckedCreateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpsertWithWhereUniqueWithoutDriverInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => WorkUpdateWithoutDriverInputObjectSchema),
      z.lazy(() => WorkUncheckedUpdateWithoutDriverInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkCreateWithoutDriverInputObjectSchema),
      z.lazy(() => WorkUncheckedCreateWithoutDriverInputObjectSchema),
    ]),
  })
  .strict();

export const WorkUpsertWithWhereUniqueWithoutDriverInputObjectSchema = Schema;

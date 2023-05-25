import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithoutCarInputObjectSchema } from "./WorkUpdateWithoutCarInput.schema";
import { WorkUncheckedUpdateWithoutCarInputObjectSchema } from "./WorkUncheckedUpdateWithoutCarInput.schema";
import { WorkCreateWithoutCarInputObjectSchema } from "./WorkCreateWithoutCarInput.schema";
import { WorkUncheckedCreateWithoutCarInputObjectSchema } from "./WorkUncheckedCreateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpsertWithWhereUniqueWithoutCarInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => WorkUpdateWithoutCarInputObjectSchema),
      z.lazy(() => WorkUncheckedUpdateWithoutCarInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkCreateWithoutCarInputObjectSchema),
      z.lazy(() => WorkUncheckedCreateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const WorkUpsertWithWhereUniqueWithoutCarInputObjectSchema = Schema;

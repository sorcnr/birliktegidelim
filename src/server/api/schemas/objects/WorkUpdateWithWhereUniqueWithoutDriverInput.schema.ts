import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithoutDriverInputObjectSchema } from "./WorkUpdateWithoutDriverInput.schema";
import { WorkUncheckedUpdateWithoutDriverInputObjectSchema } from "./WorkUncheckedUpdateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpdateWithWhereUniqueWithoutDriverInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkUpdateWithoutDriverInputObjectSchema),
      z.lazy(() => WorkUncheckedUpdateWithoutDriverInputObjectSchema),
    ]),
  })
  .strict();

export const WorkUpdateWithWhereUniqueWithoutDriverInputObjectSchema = Schema;

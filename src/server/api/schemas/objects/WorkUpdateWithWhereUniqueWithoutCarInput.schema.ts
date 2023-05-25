import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithoutCarInputObjectSchema } from "./WorkUpdateWithoutCarInput.schema";
import { WorkUncheckedUpdateWithoutCarInputObjectSchema } from "./WorkUncheckedUpdateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpdateWithWhereUniqueWithoutCarInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkUpdateWithoutCarInputObjectSchema),
      z.lazy(() => WorkUncheckedUpdateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const WorkUpdateWithWhereUniqueWithoutCarInputObjectSchema = Schema;

import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkCreateWithoutCarInputObjectSchema } from "./WorkCreateWithoutCarInput.schema";
import { WorkUncheckedCreateWithoutCarInputObjectSchema } from "./WorkUncheckedCreateWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateOrConnectWithoutCarInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkCreateWithoutCarInputObjectSchema),
      z.lazy(() => WorkUncheckedCreateWithoutCarInputObjectSchema),
    ]),
  })
  .strict();

export const WorkCreateOrConnectWithoutCarInputObjectSchema = Schema;

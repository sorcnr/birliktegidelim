import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkCreateWithoutDriverInputObjectSchema } from "./WorkCreateWithoutDriverInput.schema";
import { WorkUncheckedCreateWithoutDriverInputObjectSchema } from "./WorkUncheckedCreateWithoutDriverInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateOrConnectWithoutDriverInput> = z
  .object({
    where: z.lazy(() => WorkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkCreateWithoutDriverInputObjectSchema),
      z.lazy(() => WorkUncheckedCreateWithoutDriverInputObjectSchema),
    ]),
  })
  .strict();

export const WorkCreateOrConnectWithoutDriverInputObjectSchema = Schema;

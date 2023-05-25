import { z } from "zod";
import { WorkCreateWithoutCarInputObjectSchema } from "./WorkCreateWithoutCarInput.schema";
import { WorkUncheckedCreateWithoutCarInputObjectSchema } from "./WorkUncheckedCreateWithoutCarInput.schema";
import { WorkCreateOrConnectWithoutCarInputObjectSchema } from "./WorkCreateOrConnectWithoutCarInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateNestedManyWithoutCarInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkCreateWithoutCarInputObjectSchema),
        z.lazy(() => WorkCreateWithoutCarInputObjectSchema).array(),
        z.lazy(() => WorkUncheckedCreateWithoutCarInputObjectSchema),
        z.lazy(() => WorkUncheckedCreateWithoutCarInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkCreateOrConnectWithoutCarInputObjectSchema),
        z.lazy(() => WorkCreateOrConnectWithoutCarInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => WorkWhereUniqueInputObjectSchema),
        z.lazy(() => WorkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const WorkCreateNestedManyWithoutCarInputObjectSchema = Schema;

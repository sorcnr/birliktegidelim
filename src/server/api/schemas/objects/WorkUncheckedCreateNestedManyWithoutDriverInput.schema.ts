import { z } from "zod";
import { WorkCreateWithoutDriverInputObjectSchema } from "./WorkCreateWithoutDriverInput.schema";
import { WorkUncheckedCreateWithoutDriverInputObjectSchema } from "./WorkUncheckedCreateWithoutDriverInput.schema";
import { WorkCreateOrConnectWithoutDriverInputObjectSchema } from "./WorkCreateOrConnectWithoutDriverInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUncheckedCreateNestedManyWithoutDriverInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WorkCreateWithoutDriverInputObjectSchema),
          z.lazy(() => WorkCreateWithoutDriverInputObjectSchema).array(),
          z.lazy(() => WorkUncheckedCreateWithoutDriverInputObjectSchema),
          z
            .lazy(() => WorkUncheckedCreateWithoutDriverInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WorkCreateOrConnectWithoutDriverInputObjectSchema),
          z
            .lazy(() => WorkCreateOrConnectWithoutDriverInputObjectSchema)
            .array(),
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

export const WorkUncheckedCreateNestedManyWithoutDriverInputObjectSchema =
  Schema;

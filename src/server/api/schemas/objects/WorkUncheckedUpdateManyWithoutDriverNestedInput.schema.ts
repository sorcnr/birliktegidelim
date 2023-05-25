import { z } from "zod";
import { WorkCreateWithoutDriverInputObjectSchema } from "./WorkCreateWithoutDriverInput.schema";
import { WorkUncheckedCreateWithoutDriverInputObjectSchema } from "./WorkUncheckedCreateWithoutDriverInput.schema";
import { WorkCreateOrConnectWithoutDriverInputObjectSchema } from "./WorkCreateOrConnectWithoutDriverInput.schema";
import { WorkUpsertWithWhereUniqueWithoutDriverInputObjectSchema } from "./WorkUpsertWithWhereUniqueWithoutDriverInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithWhereUniqueWithoutDriverInputObjectSchema } from "./WorkUpdateWithWhereUniqueWithoutDriverInput.schema";
import { WorkUpdateManyWithWhereWithoutDriverInputObjectSchema } from "./WorkUpdateManyWithWhereWithoutDriverInput.schema";
import { WorkScalarWhereInputObjectSchema } from "./WorkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUncheckedUpdateManyWithoutDriverNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => WorkUpsertWithWhereUniqueWithoutDriverInputObjectSchema),
          z
            .lazy(() => WorkUpsertWithWhereUniqueWithoutDriverInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => WorkWhereUniqueInputObjectSchema),
          z.lazy(() => WorkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WorkWhereUniqueInputObjectSchema),
          z.lazy(() => WorkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WorkWhereUniqueInputObjectSchema),
          z.lazy(() => WorkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WorkWhereUniqueInputObjectSchema),
          z.lazy(() => WorkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => WorkUpdateWithWhereUniqueWithoutDriverInputObjectSchema),
          z
            .lazy(() => WorkUpdateWithWhereUniqueWithoutDriverInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WorkUpdateManyWithWhereWithoutDriverInputObjectSchema),
          z
            .lazy(() => WorkUpdateManyWithWhereWithoutDriverInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WorkScalarWhereInputObjectSchema),
          z.lazy(() => WorkScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WorkUncheckedUpdateManyWithoutDriverNestedInputObjectSchema =
  Schema;

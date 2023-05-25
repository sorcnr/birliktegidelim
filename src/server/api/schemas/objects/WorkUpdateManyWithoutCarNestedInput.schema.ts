import { z } from "zod";
import { WorkCreateWithoutCarInputObjectSchema } from "./WorkCreateWithoutCarInput.schema";
import { WorkUncheckedCreateWithoutCarInputObjectSchema } from "./WorkUncheckedCreateWithoutCarInput.schema";
import { WorkCreateOrConnectWithoutCarInputObjectSchema } from "./WorkCreateOrConnectWithoutCarInput.schema";
import { WorkUpsertWithWhereUniqueWithoutCarInputObjectSchema } from "./WorkUpsertWithWhereUniqueWithoutCarInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./WorkWhereUniqueInput.schema";
import { WorkUpdateWithWhereUniqueWithoutCarInputObjectSchema } from "./WorkUpdateWithWhereUniqueWithoutCarInput.schema";
import { WorkUpdateManyWithWhereWithoutCarInputObjectSchema } from "./WorkUpdateManyWithWhereWithoutCarInput.schema";
import { WorkScalarWhereInputObjectSchema } from "./WorkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpdateManyWithoutCarNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => WorkUpsertWithWhereUniqueWithoutCarInputObjectSchema),
        z
          .lazy(() => WorkUpsertWithWhereUniqueWithoutCarInputObjectSchema)
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
        z.lazy(() => WorkUpdateWithWhereUniqueWithoutCarInputObjectSchema),
        z
          .lazy(() => WorkUpdateWithWhereUniqueWithoutCarInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => WorkUpdateManyWithWhereWithoutCarInputObjectSchema),
        z
          .lazy(() => WorkUpdateManyWithWhereWithoutCarInputObjectSchema)
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

export const WorkUpdateManyWithoutCarNestedInputObjectSchema = Schema;

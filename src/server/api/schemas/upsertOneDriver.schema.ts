import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";
import { DriverCreateInputObjectSchema } from "./objects/DriverCreateInput.schema";
import { DriverUncheckedCreateInputObjectSchema } from "./objects/DriverUncheckedCreateInput.schema";
import { DriverUpdateInputObjectSchema } from "./objects/DriverUpdateInput.schema";
import { DriverUncheckedUpdateInputObjectSchema } from "./objects/DriverUncheckedUpdateInput.schema";

export const DriverUpsertSchema = z.object({
  where: DriverWhereUniqueInputObjectSchema,
  create: z.union([
    DriverCreateInputObjectSchema,
    DriverUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DriverUpdateInputObjectSchema,
    DriverUncheckedUpdateInputObjectSchema,
  ]),
});

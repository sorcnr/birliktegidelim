import { z } from "zod";
import { DriverUpdateInputObjectSchema } from "./objects/DriverUpdateInput.schema";
import { DriverUncheckedUpdateInputObjectSchema } from "./objects/DriverUncheckedUpdateInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";

export const DriverUpdateOneSchema = z.object({
  data: z.union([
    DriverUpdateInputObjectSchema,
    DriverUncheckedUpdateInputObjectSchema,
  ]),
  where: DriverWhereUniqueInputObjectSchema,
});

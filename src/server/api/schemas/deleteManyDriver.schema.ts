import { z } from "zod";
import { DriverWhereInputObjectSchema } from "./objects/DriverWhereInput.schema";

export const DriverDeleteManySchema = z.object({
  where: DriverWhereInputObjectSchema.optional(),
});

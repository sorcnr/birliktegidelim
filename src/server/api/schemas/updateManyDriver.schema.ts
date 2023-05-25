import { z } from "zod";
import { DriverUpdateManyMutationInputObjectSchema } from "./objects/DriverUpdateManyMutationInput.schema";
import { DriverWhereInputObjectSchema } from "./objects/DriverWhereInput.schema";

export const DriverUpdateManySchema = z.object({
  data: DriverUpdateManyMutationInputObjectSchema,
  where: DriverWhereInputObjectSchema.optional(),
});

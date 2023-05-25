import { z } from "zod";
import { CarWhereInputObjectSchema } from "./objects/CarWhereInput.schema";

export const CarDeleteManySchema = z.object({
  where: CarWhereInputObjectSchema.optional(),
});

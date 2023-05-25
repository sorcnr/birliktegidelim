import { z } from "zod";
import { CarUpdateManyMutationInputObjectSchema } from "./objects/CarUpdateManyMutationInput.schema";
import { CarWhereInputObjectSchema } from "./objects/CarWhereInput.schema";

export const CarUpdateManySchema = z.object({
  data: CarUpdateManyMutationInputObjectSchema,
  where: CarWhereInputObjectSchema.optional(),
});

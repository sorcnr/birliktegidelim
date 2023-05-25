import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";

export const CarDeleteOneSchema = z.object({
  where: CarWhereUniqueInputObjectSchema,
});

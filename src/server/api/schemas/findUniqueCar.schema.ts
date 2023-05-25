import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";

export const CarFindUniqueSchema = z.object({
  where: CarWhereUniqueInputObjectSchema,
});

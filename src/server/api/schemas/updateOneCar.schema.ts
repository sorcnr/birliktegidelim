import { z } from "zod";
import { CarUpdateInputObjectSchema } from "./objects/CarUpdateInput.schema";
import { CarUncheckedUpdateInputObjectSchema } from "./objects/CarUncheckedUpdateInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";

export const CarUpdateOneSchema = z.object({
  data: z.union([
    CarUpdateInputObjectSchema,
    CarUncheckedUpdateInputObjectSchema,
  ]),
  where: CarWhereUniqueInputObjectSchema,
});

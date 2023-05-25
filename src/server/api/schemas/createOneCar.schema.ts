import { z } from "zod";
import { CarCreateInputObjectSchema } from "./objects/CarCreateInput.schema";
import { CarUncheckedCreateInputObjectSchema } from "./objects/CarUncheckedCreateInput.schema";

export const CarCreateOneSchema = z.object({
  data: z.union([
    CarCreateInputObjectSchema,
    CarUncheckedCreateInputObjectSchema,
  ]),
});

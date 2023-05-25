import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";
import { CarCreateInputObjectSchema } from "./objects/CarCreateInput.schema";
import { CarUncheckedCreateInputObjectSchema } from "./objects/CarUncheckedCreateInput.schema";
import { CarUpdateInputObjectSchema } from "./objects/CarUpdateInput.schema";
import { CarUncheckedUpdateInputObjectSchema } from "./objects/CarUncheckedUpdateInput.schema";

export const CarUpsertSchema = z.object({
  where: CarWhereUniqueInputObjectSchema,
  create: z.union([
    CarCreateInputObjectSchema,
    CarUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CarUpdateInputObjectSchema,
    CarUncheckedUpdateInputObjectSchema,
  ]),
});

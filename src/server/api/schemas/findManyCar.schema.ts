import { z } from "zod";
import { CarOrderByWithRelationInputObjectSchema } from "./objects/CarOrderByWithRelationInput.schema";
import { CarWhereInputObjectSchema } from "./objects/CarWhereInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";
import { CarScalarFieldEnumSchema } from "./enums/CarScalarFieldEnum.schema";

export const CarFindManySchema = z.object({
  orderBy: z
    .union([
      CarOrderByWithRelationInputObjectSchema,
      CarOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CarWhereInputObjectSchema.optional(),
  cursor: CarWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CarScalarFieldEnumSchema).optional(),
});

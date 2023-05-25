import { z } from "zod";
import { CarWhereInputObjectSchema } from "./objects/CarWhereInput.schema";
import { CarOrderByWithAggregationInputObjectSchema } from "./objects/CarOrderByWithAggregationInput.schema";
import { CarScalarWhereWithAggregatesInputObjectSchema } from "./objects/CarScalarWhereWithAggregatesInput.schema";
import { CarScalarFieldEnumSchema } from "./enums/CarScalarFieldEnum.schema";

export const CarGroupBySchema = z.object({
  where: CarWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CarOrderByWithAggregationInputObjectSchema,
      CarOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CarScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CarScalarFieldEnumSchema),
});

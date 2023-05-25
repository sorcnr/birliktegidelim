import { z } from "zod";
import { CarOrderByWithRelationInputObjectSchema } from "./objects/CarOrderByWithRelationInput.schema";
import { CarWhereInputObjectSchema } from "./objects/CarWhereInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./objects/CarWhereUniqueInput.schema";
import { CarCountAggregateInputObjectSchema } from "./objects/CarCountAggregateInput.schema";
import { CarMinAggregateInputObjectSchema } from "./objects/CarMinAggregateInput.schema";
import { CarMaxAggregateInputObjectSchema } from "./objects/CarMaxAggregateInput.schema";
import { CarAvgAggregateInputObjectSchema } from "./objects/CarAvgAggregateInput.schema";
import { CarSumAggregateInputObjectSchema } from "./objects/CarSumAggregateInput.schema";

export const CarAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), CarCountAggregateInputObjectSchema])
    .optional(),
  _min: CarMinAggregateInputObjectSchema.optional(),
  _max: CarMaxAggregateInputObjectSchema.optional(),
  _avg: CarAvgAggregateInputObjectSchema.optional(),
  _sum: CarSumAggregateInputObjectSchema.optional(),
});

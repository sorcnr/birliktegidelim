import { z } from "zod";
import { DriverOrderByWithRelationInputObjectSchema } from "./objects/DriverOrderByWithRelationInput.schema";
import { DriverWhereInputObjectSchema } from "./objects/DriverWhereInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";
import { DriverCountAggregateInputObjectSchema } from "./objects/DriverCountAggregateInput.schema";
import { DriverMinAggregateInputObjectSchema } from "./objects/DriverMinAggregateInput.schema";
import { DriverMaxAggregateInputObjectSchema } from "./objects/DriverMaxAggregateInput.schema";
import { DriverAvgAggregateInputObjectSchema } from "./objects/DriverAvgAggregateInput.schema";
import { DriverSumAggregateInputObjectSchema } from "./objects/DriverSumAggregateInput.schema";

export const DriverAggregateSchema = z.object({
  orderBy: z
    .union([
      DriverOrderByWithRelationInputObjectSchema,
      DriverOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DriverWhereInputObjectSchema.optional(),
  cursor: DriverWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DriverCountAggregateInputObjectSchema])
    .optional(),
  _min: DriverMinAggregateInputObjectSchema.optional(),
  _max: DriverMaxAggregateInputObjectSchema.optional(),
  _avg: DriverAvgAggregateInputObjectSchema.optional(),
  _sum: DriverSumAggregateInputObjectSchema.optional(),
});

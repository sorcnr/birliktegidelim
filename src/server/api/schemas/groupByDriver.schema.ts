import { z } from "zod";
import { DriverWhereInputObjectSchema } from "./objects/DriverWhereInput.schema";
import { DriverOrderByWithAggregationInputObjectSchema } from "./objects/DriverOrderByWithAggregationInput.schema";
import { DriverScalarWhereWithAggregatesInputObjectSchema } from "./objects/DriverScalarWhereWithAggregatesInput.schema";
import { DriverScalarFieldEnumSchema } from "./enums/DriverScalarFieldEnum.schema";

export const DriverGroupBySchema = z.object({
  where: DriverWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DriverOrderByWithAggregationInputObjectSchema,
      DriverOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DriverScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DriverScalarFieldEnumSchema),
});

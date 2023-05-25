import { z } from "zod";
import { DriverOrderByWithRelationInputObjectSchema } from "./objects/DriverOrderByWithRelationInput.schema";
import { DriverWhereInputObjectSchema } from "./objects/DriverWhereInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";
import { DriverScalarFieldEnumSchema } from "./enums/DriverScalarFieldEnum.schema";

export const DriverFindFirstSchema = z.object({
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
  distinct: z.array(DriverScalarFieldEnumSchema).optional(),
});

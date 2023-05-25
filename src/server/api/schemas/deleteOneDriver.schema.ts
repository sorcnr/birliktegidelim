import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";

export const DriverDeleteOneSchema = z.object({
  where: DriverWhereUniqueInputObjectSchema,
});

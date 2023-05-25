import { z } from "zod";
import { DriverCreateInputObjectSchema } from "./objects/DriverCreateInput.schema";
import { DriverUncheckedCreateInputObjectSchema } from "./objects/DriverUncheckedCreateInput.schema";

export const DriverCreateOneSchema = z.object({
  data: z.union([
    DriverCreateInputObjectSchema,
    DriverUncheckedCreateInputObjectSchema,
  ]),
});

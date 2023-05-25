import { z } from "zod";

export const CarScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "brand",
  "model",
  "year",
  "color",
  "image",
  "available",
]);

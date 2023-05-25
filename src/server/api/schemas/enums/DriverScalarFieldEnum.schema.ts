import { z } from "zod";

export const DriverScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "userId",
  "name",
  "age",
  "image",
]);

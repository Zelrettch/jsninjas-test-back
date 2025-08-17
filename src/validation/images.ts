import { z } from "zod";

export const uploadImageSchema = z
  .object({
    heroId: z.string().regex(/^\d+$/, "ID must be a number"),
  })
  .strict();

export namespace ImageData {
  export type Upload = z.infer<typeof uploadImageSchema>;
}
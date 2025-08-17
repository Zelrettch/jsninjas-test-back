import { z } from "zod";

export const createHeroSchema = z
  .object({
    nickname: z.string().min(1),
    real_name: z.string().min(1),
    origin_description: z.string().min(1),
    superpowers: z.string().min(1),
    catch_phrase: z.string().min(1),
    thumbnail: z.string().optional(),
  })
  .strict();

export const updateHeroSchema = z
  .object({
    nickname: z.string().min(1).optional(),
    real_name: z.string().min(1).optional(),
    origin_description: z.string().min(1).optional(),
    superpowers: z.string().min(1).optional(),
    catch_phrase: z.string().min(1).optional(),
    thumbnail: z.string().optional(),
  })
  .strict();

export const getHeroesParamsSchema = z.object({
  page: z
    .string()
    .regex(/^(?!0+$)\d+$/)
    .default("1")
    .catch("1"),
});

export namespace HeroData {
  export type Create = z.infer<typeof createHeroSchema>;
  export type GetParams = z.infer<typeof getHeroesParamsSchema>;
  export type Update = z.infer<typeof updateHeroSchema>;
}

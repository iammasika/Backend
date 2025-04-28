import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().optional(),
  avatarUrl: z.string().optional(),
  bio: z.string().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
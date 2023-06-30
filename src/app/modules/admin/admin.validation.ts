import { z } from 'zod';

const updateAdmin = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    role: z.enum(['admin']),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
    address: z.string().optional(),
  }),
});

export const AdminValidation = {
  updateAdmin,
};

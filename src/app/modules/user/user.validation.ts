import { z } from 'zod';
import { role } from './user.constant';

const createUserZodSchema = z.object({
  body: z.object({
    user: z.object({
      phoneNumber: z.string({
        required_error: 'phoneNumber is Required',
      }),
      role: z.enum([...role] as [string, ...string[]], {
        required_error: 'Role is required',
      }),
      password: z.string({
        required_error: 'password is Required',
      }),
      name: z.object({
        firstName: z.string(),
        lastName: z.string(),
      }),
      address: z.string({
        required_error: 'address is Required',
      }),
      budget: z.number({
        required_error: 'budget is Required',
      }),
      income: z.number({
        required_error: 'income is Required',
      }),
    }),
  }),
});

export const userValidation = {
  createUserZodSchema,
};

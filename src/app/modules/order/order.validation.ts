import { z } from 'zod';

const orderZodValidation = z.object({
  body: z.object({
    cow: z.string({
      required_error: 'cow is Required',
    }),
    buyer: z.string({
      required_error: 'Buyer IS Required',
    }),
  }),
});

export const orderValidation = {
  orderZodValidation,
};

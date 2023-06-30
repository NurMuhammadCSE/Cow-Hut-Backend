import { z } from 'zod';

const cowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is REQUIRED',
    }),
    age: z.number({
      required_error: 'age is Required',
    }),
    price: z.number(),
    location: z.enum(
      [
        'Dhaka',
        'Chattogram',
        'Barishal',
        'Rajshahi',
        'Sylhet',
        'Comilla',
        'Rangpur',
        'Mymensingh',
      ],
      {
        required_error: 'location is Required',
      }
    ),
    breed: z.enum(
      [
        'Brahman',
        'Nellore',
        'Sahiwal',
        'Gir',
        'Indigenous',
        'Thaparkar',
        'Kankrej',
      ],
      {
        required_error: 'breed is Required',
      }
    ),
    weight: z.number({
      required_error: 'weight is Required',
    }),
    label: z.enum(['for sale', 'sold out'], {
      required_error: 'label is Required',
    }),
    category: z.enum(['Dairy', 'Beef', 'DualPurpose'], {
      required_error: 'category is Required',
    }),
    seller: z.string(),
  }),
});

export const cowValidation = {
  cowZodSchema,
};

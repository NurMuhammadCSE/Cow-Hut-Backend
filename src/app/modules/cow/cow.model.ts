import { Schema, model } from 'mongoose';
import { ICow } from './cow.interface';

const CowSchema: Schema<ICow> = new Schema<ICow>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    enum: [
      'Dhaka',
      'Chattogram',
      'Barishal',
      'Rajshahi',
      'Sylhet',
      'Comilla',
      'Rangpur',
      'Mymensingh',
    ],
    required: true,
  },
  breed: {
    type: String,
    enum: [
      'Brahman',
      'Nellore',
      'Sahiwal',
      'Gir',
      'Indigenous',
      'Thaparkar',
      'Kankrej',
    ],
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Dairy', 'Beef', 'DualPurpose'],
    required: true,
  },
});

export const CowModel = model<ICow>('Cow', CowSchema);

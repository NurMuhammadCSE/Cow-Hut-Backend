import { Model, Schema } from 'mongoose';

export type ICow = {
  name: string;
  age: number;
  price: number;
  location:
    | 'Dhaka'
    | 'Chattogram'
    | 'Barishal'
    | 'Rajshahi'
    | 'Sylhet'
    | 'Comilla'
    | 'Rangpur'
    | 'Mymensingh';
  breed:
    | 'Brahman'
    | 'Nellore'
    | 'Sahiwal'
    | 'Gir'
    | 'Indigenous'
    | 'Thaparkar'
    | 'Kankrej';
  weight: number;
  label: 'for sale';
  category: 'Dairy' | 'Beef' | 'DualPurpose';
  seller: Schema.Types.ObjectId;
};

export type ICowFilters = {
  searchTerm?: string;
};

export type CowModel = Model<ICow, Record<string, unknown>>;

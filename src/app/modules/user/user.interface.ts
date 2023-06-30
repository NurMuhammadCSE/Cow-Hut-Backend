import { Model } from 'mongoose';

export type IUser = {
  phoneNumber: string;
  role: 'buyer' | 'seller';
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  budget: number;
  income: number;
};

export type IUserFilters = {
  searchTerm?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

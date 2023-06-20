import { Model } from 'mongoose';

export type IUser = {
  role: 'seller' | 'buyer';
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type IUserFilters = {
  searchTerm?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

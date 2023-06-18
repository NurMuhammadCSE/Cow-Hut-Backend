import { Model } from 'mongoose';

type IName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  role: 'seller' | 'buyer';
  password: string;
  name: IName;
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

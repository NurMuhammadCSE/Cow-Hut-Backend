/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  phoneNumber: string;
  role: 'admin';
  password: string;
  name: UserName;
  address: string;
};

export type AdminModel = {
  isUserExist(
    phoneNumber: string
  ): Promise<Pick<IAdmin, 'phoneNumber' | 'password'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IAdmin>;

// export type AdminModel = Model<IAdmin, Record<string, unknown>>;

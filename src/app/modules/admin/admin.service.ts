/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdmin } from './admin.interface';
import { Admin } from './admin.model';

const createAdmin = async (user: IAdmin): Promise<IAdmin | null> => {
  const createdUser = await Admin.create(user);

  if (!createAdmin) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Cow Model!');
  }
  return createdUser;
};

export const AdminService = {
  createAdmin,
};

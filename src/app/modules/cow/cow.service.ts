import { ICow } from './cow.interface';
import { CowModel } from './cow.model';

const createCow = async (user: ICow): Promise<ICow | null> => {
  const createdUser = await CowModel.create(user);

  if (!createCow) {
    throw new Error('Failed to create Cow Model!');
  }
  return createdUser;
};

export const CowService = {
  createCow,
};

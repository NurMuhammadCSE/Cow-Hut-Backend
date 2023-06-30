/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';

const AdminSchema = new Schema<IAdmin, AdminModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin'],
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.statics.isUserExist = async function (
  phoneNumber: string
): Promise<Pick<IAdmin, 'phoneNumber' | 'password'> | null> {
  return await Admin.findOne({ phoneNumber }, { phoneNumber: 1, password: 1 });
};

AdminSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// User.create() / user.save()
AdminSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);

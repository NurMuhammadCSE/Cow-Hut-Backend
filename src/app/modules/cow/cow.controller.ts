import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CowService } from './cow.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;

  const result = await CowService.createCow(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow created successfully!',
    data: result,
  });
});

export const cowsController = {
  createUser,
};

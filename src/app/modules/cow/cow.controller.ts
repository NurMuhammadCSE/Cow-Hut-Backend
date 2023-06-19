import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CowService } from './cow.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

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

const getAllCows = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, ['searchTerm', 'price', 'year']);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await CowService.getAllCows(filters, paginationOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getSingleCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await CowService.getSingleCow(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow get successfully!',
      data: result,
    });
    next();
  }
);

export const cowsController = {
  createUser,
  getAllCows,
  getSingleCow,
};

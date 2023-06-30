import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';
import { Request, Response } from 'express';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;

  const result = await OrderService.createOrder(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

export const orderController = {
  createOrder,
};

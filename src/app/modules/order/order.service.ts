import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (order: IOrder): Promise<IOrder | null> => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderService = {
  createOrder,
};

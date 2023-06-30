import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const OrderSchema: Schema<IOrder> = new Schema<IOrder>({
  cow: {
    type: Schema.Types.ObjectId,
  },
  buyer: {
    type: Schema.Types.ObjectId,
  },
});

export const OrderModel = model<IOrder>('Order', OrderSchema);

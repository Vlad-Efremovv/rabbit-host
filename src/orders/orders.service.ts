import { Injectable } from '@nestjs/common';
import { OrdersDto } from './DTO/orders.dto';

@Injectable()
export class OrdersService {
  orders = [];

  create(order: OrdersDto) {
    this.orders.push(order);
    return this.orders;
  }
}

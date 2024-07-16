import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrdersDto } from './DTO/orders.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject('NOTIFICATION_SERVISE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  async create(@Body() payload: OrdersDto) {
    this.client.emit('orders_create', payload);
    return this.ordersService.create(payload);
  }
}

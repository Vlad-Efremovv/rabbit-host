import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVISE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://tngmhaki:f4Xs8OnPrLeN0lf0fl6RC-j2qWPew_BR@kangaroo.rmq.cloudamqp.com/tngmhaki',
          ],
          queue: 'notification_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

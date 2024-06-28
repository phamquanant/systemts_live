import { Order } from 'src/entities/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log_order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  link: string;

  @ManyToOne(() => Order, (order) => order.log_orders)
  order: Order;
}

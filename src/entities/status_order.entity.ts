import { Order } from 'src/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status_order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.status_order)
  orders: Order[];
}

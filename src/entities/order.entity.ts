import { Link } from 'src/entities/links.entity';
import { Log_order } from 'src/entities/log_order.entity';
import { Source_Type } from 'src/entities/source_type.entity';
import { Status_order } from 'src/entities/status_order.entity';
import { Platform } from 'src/entities/platform.entity';
import { User } from 'src/entities/user.entity';
import { Vps } from 'src/entities/vps.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @ManyToOne(() => Platform, (platform) => platform.orders)
  platform: Platform;

  @ManyToOne(() => Status_order, (status_order) => status_order.orders)
  status_order: Status_order;

  @OneToMany(() => Link, (link) => link.order)
  links: Link[];

  @OneToMany(() => Log_order, (log_order) => log_order.order)
  log_orders: Log_order[];

  @ManyToOne(() => Source_Type, (source_type) => source_type.orders)
  source_type: Source_Type;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}

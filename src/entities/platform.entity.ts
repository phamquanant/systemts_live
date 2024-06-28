import { Order } from 'src/entities/order.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date;

  /**
   * DB last update time.
   */
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updatedAt: Date;


  @OneToMany(() => Order, (order) => order.platform)
  orders: Order[];
}

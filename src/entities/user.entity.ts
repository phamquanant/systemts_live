import { Role } from 'src/entities/role.entity';
import { Status } from 'src/entities/status.entity';
import { Order } from 'src/entities/order.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Status, (status) => status.users)
  status: Status;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

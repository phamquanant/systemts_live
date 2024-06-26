import { Memory_vps } from 'src/genreral/entities/memory_vps.entity';
import { Order } from 'src/order/entities/order.entity';
import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Vps {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	name_cpu: string;

	@Column()
	num_core_in_use: string;

	@Column()
	speed: string;

	@Column()
	ipv4: string;

	@Column()
	total_memory: string;

	@Column()
	free_memory: string;

	@Column()
	core: string;

	@Column()
	port: string;

	@OneToMany(() => Memory_vps, (memoryvps) => memoryvps.vps)
	memory_vps: Memory_vps[];

	@ManyToOne(() => Order, (order) => order.vps)
	order: Order;
}

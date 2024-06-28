import { Vps } from 'src/entities/vps.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Memory_vps {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  hasUsed: string;

  @Column()
  available: string;

  @ManyToOne(() => Vps, (vps) => vps.memory_vps)
  vps: Vps;
}

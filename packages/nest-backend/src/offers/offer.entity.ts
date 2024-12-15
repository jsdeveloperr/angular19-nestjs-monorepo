import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mode: string;

  @Column()
  movement_type: string;

  @Column()
  incoterm: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  package_type: string;

  @Column()
  unit_1: string;

  @Column()
  unit_2: string;

  @Column()
  currency: string;

  @Column({ nullable: true })
  pallet_count: number;

  @Column({ default: 0, type: 'integer' })
  size: number;
  
  @Column({ default: 0, type: 'integer' })
  weight: number;  

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}

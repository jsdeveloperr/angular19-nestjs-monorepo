import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  width: number;

  @Column()
  length: number;

  @Column()
  height: number;
}

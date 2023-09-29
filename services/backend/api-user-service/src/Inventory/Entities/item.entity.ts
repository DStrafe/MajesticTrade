import { BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public description: string;

  @OneToOne(() => CategoryEntity)
  @JoinColumn()
  public categoryId: CategoryEntity;
}
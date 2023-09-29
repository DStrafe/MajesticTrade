import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public description: string;
}
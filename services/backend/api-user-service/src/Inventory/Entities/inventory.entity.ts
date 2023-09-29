import { BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../User/Entities/user.entity';
import { ItemEntity } from './item.entity';

export class InventoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'float' })
  public count!: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  public userId: UserEntity;

  @OneToOne(() => ItemEntity)
  @JoinColumn()
  public itemId: ItemEntity;
}
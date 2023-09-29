import { BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../User/Entities/user.entity';

export class ReviewsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'float' })
  public score!: number;

  @Column({ type: 'varchar' })
  public review: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  public recipientUserId: UserEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  public senderUserId: UserEntity;
}
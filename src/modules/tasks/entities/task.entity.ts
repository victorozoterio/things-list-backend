import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid' })
  uuid: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'priority' })
  priority: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}

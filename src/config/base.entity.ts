import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: String

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
    createdAt!: Date

  @CreateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
    updatedAt!: Date
}

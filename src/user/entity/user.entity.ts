import { Column, Entity, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { CustomerEntity } from '../../customer/entity/Customer.entity'

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
    username!: string

  @Column()
    name!: string

  @Column()
    lastname!: string

  @Column()
    password!: string

  @Column()
    city!: string

  @Column()
    province!: string

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity
}

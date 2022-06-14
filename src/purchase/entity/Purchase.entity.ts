import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { CustomerEntity } from '../../customer/entity/Customer.entity'
import { BaseEntity } from '../../config/base.entity'

@Entity({ name: 'purchases' })
export class PurchaseEntity extends BaseEntity {
  @Column()
    status!: string

  @Column()
    paymentMethod!: string

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({ name: 'customer_id' })
    customer!: CustomerEntity
}

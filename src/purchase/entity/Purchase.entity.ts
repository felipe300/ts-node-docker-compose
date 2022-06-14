import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { PurchaseProductEntity } from '../../custom/entity/purchasesProducts.entity'
import { CustomerEntity } from '../../customer/entity/Customer.entity'

@Entity({ name: 'purchases' })
export class PurchaseEntity extends BaseEntity {
  @Column()
    status!: string

  @Column()
    paymentMethod!: string

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({ name: 'customer_id' })
    customer!: CustomerEntity

  @OneToMany(
    () => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.purchase)
    purchaseProduct!: PurchaseProductEntity[]
}

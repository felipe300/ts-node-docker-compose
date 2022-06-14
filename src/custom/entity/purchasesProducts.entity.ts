import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { PurchaseEntity } from '../../purchase/entity/Purchase.entity'
import { ProductEntity } from '../../product/entity/Product.entity'

@Entity({ name: 'purchases-products' })
export class PurchaseProductEntity extends BaseEntity {
  @Column()
    qty!: number

  @Column()
    total!: number

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
  @JoinColumn({ name: 'purchase_id' })
    purchase!: PurchaseEntity

  @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
  @JoinColumn({ name: 'product_id' })
    product!: ProductEntity
}

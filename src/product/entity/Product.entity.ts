import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { CategoryEntity } from '../../categories/entity/category.entity'
import { BaseEntity } from '../../config/base.entity'
import { PurchaseProductEntity } from '../../custom/entity/purchasesProducts.entity'

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
  @Column()
    productName!: string

  @Column()
    description!: string

  @Column()
    price!: number

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
    category!: CategoryEntity

  @OneToMany(
    () => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.product)
    purchaseProduct!: PurchaseProductEntity[]
}

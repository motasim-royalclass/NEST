import { ProductImage } from "src/product-images/entities/product-image.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @OneToMany(() => ProductImage, (image) => image.product, { cascade: true })
    images: ProductImage[];
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from "../../assets/styles/modules/product_card.module.css"
interface ProductCardProps {
    href: string,
    img: string,
    name: string,
    prize: string
}

function ProductCard({ href, img, name, prize }: ProductCardProps) {
    return (
        <div>
            <Link href={href}>
                <div className={style.card}>
                    <div className={style.img}>
                        <Image draggable={false} fill src={img} alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <p>{prize}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard

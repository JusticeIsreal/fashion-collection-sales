"use client"
import { AppTopBar, Footer, ProductCard, SubscribeCard } from '@/components'
import style from "../../assets/styles/modules/product.module.css"
import Image from 'next/image'
import { Chip, Divider, Group } from '@mantine/core'
import { products } from '@/data'
function Product() {
    return (
        <div>
            <AppTopBar />
            <div className={style.product_container}>
                <div className={style.product_display}>
                    <div className={style.product_preview}>
                        <div className={style.images_container}>
                            <div className={style.img_card}></div>
                            <div className={style.img_card}></div>
                            <div className={style.img_card}></div>
                        </div>
                        <div className={style.img}>
                            <Image alt={"Jacket"} fill src={"https://s.alicdn.com/@sc04/kf/HTB1hfSFSFXXXXabXXXXq6xXFXXXv.jpg_960x960.jpg"} />
                        </div>
                    </div>
                    <div className={style.description}>
                        <h1>Stone island Blue winter jacket</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum sit consequatur placeat eaque quisquam doloremque labore culpa incidunt numquam!</p>
                        <Divider mb={20} mt={20} />
                        <Chip.Group>
                            <h3>Size</h3>
                            <Group mb={20} mt={10} spacing={10} position="left">
                                <Chip size={'lg'} variant={"filled"} radius={5} value="1"><h4>S</h4></Chip>
                                <Chip size={'lg'} variant={"filled"} radius={5} value="2"><h4>M</h4></Chip>
                                <Chip size={'lg'} variant={"filled"} radius={5} value="3"><h4>L</h4></Chip>
                            </Group>
                        </Chip.Group>

                        <Chip.Group>
                            <h3>Color</h3>
                            <Group mt={10} spacing={10} position="left">
                            </Group>
                        </Chip.Group>


                        <button>Add to bag</button>
                    </div>
                </div>
            </div>
            <div className="popular">
                <h2>Related items</h2>
                <div className="popular_container">
                    {
                        products.slice(0, 5).map(({ img, name, prize }, i) =>
                            <ProductCard key={name + i} href="/product" img={img} name={name} prize={prize} />
                        )
                    }
                </div>
            </div>
            <SubscribeCard />

            <Footer />

        </div>
    )
}

export default Product


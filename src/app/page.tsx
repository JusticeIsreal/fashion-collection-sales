"use client"
import { AppTopBar, Footer, HeroSection, HomeBanner, ProductCard, SubscribeCard } from "@/components";
import { categories, products } from "@/data";
import Image from 'next/image'

export default function Home() {



  return (
    <div>
      <AppTopBar />
      <HeroSection />
      <div className="category">
        <h1>Category</h1>
        <div className="category_container">
          {
            categories.map(({ img, name }) =>
              <div key={name} className="card">
                <div className="img">
                  <Image fill src={img} alt={img} />
                </div>
                <p>{name}</p>
              </div>)
          }

        </div>
      </div>
      <div className="popular">
        <h1>Popular</h1>
        <div className="popular_container">
          {
            products.map(({ img, name, prize },i) =>
              <ProductCard key={name+i} href="/product" img={img} name={name} prize={prize} />
            )
          }
        </div>
      </div>
      <HomeBanner />
      <SubscribeCard />
      <Footer />
    </div>

  )
}

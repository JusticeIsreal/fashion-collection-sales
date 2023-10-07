"use client"

import { AppTopBar, Footer, ProductCard, SubscribeCard } from '@/components'
import React from 'react'
import Image from 'next/image'
import { Accordion } from '@mantine/core'
import { products } from '@/data'
function Product() {

  return (
    <>
      <AppTopBar />

      <div className="products">
        <div className="products_container">
          <div className="products_filter_bar">
            <Accordion>
                <Accordion.Item value='category'>
                  <Accordion.Control>Category</Accordion.Control>
                  <Accordion.Panel></Accordion.Panel>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item value='size'>
                  <Accordion.Control>Size</Accordion.Control>
                  <Accordion.Panel></Accordion.Panel>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item value='price'>
                  <Accordion.Control>Price</Accordion.Control>
                  <Accordion.Panel></Accordion.Panel>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item value='color'>
                  <Accordion.Control>Color</Accordion.Control>
                  <Accordion.Panel></Accordion.Panel>
                </Accordion.Item>
            </Accordion>


          </div>
          <div className="popular">
            <h1>Popular</h1>
            <div className="popular_container">
              {
                products.map(({ img, name, prize },i) =>
                 <ProductCard key={name+i} href='/product' img={img} name={name} prize={prize} />
                )
              }
            </div>
          </div>
        </div>
      </div>
      <SubscribeCard />
      <Footer />

    </>
  )
}

export default Product

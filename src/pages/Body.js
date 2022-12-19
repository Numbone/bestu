import React, { useEffect, useState } from 'react'
import { productCategory } from '../api/product'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockTop from '../component/BlockTop/BlockTop'
import Item from '../component/Item/Item'

const Body = () => {
  const [product, setProduct] = useState({})
  const getAllProducts = async () => {
    try {
      const { data } = await productCategory("body")
      setProduct(data.product)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(product);
  useEffect(() => {
    getAllProducts()
  }, [])
 
  return (
    <div>
      <BlockTop />
      <BlockAbout />
      <div className='block-catalog'>
        <div className='container'>
          <div className='block__title text-center'>
            <p>Каталог</p>
          </div>
          <div className='block-catalog__items'>
            <div className='row g-2 g-md-4'>
              {product.length == undefined
                ? <div></div>
                : product.map((item, index) =>
                  <Item props={item} key={index} />)
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Body
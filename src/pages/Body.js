import React, { useContext, useEffect, useState } from 'react'
import { productCategory } from '../api/product'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockTop from '../component/BlockTop/BlockTop'
import Item from '../component/Item/Item'
import {Context} from "../"
const Body = () => {
  const [product, setProduct] = useState({})
  const {lang}=useContext(Context)
  const getAllProducts = async () => {
    try {
      const { data } = await productCategory("body",lang.lang)
      setProduct(data.product)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(product);
  useEffect(() => {
    getAllProducts()
  }, [])
  const { basket } = useContext(Context)
  const clickOrder = (id) => {
    basket.setBasket(id)

}
  useEffect(() => {
    window.scrollTo(0, 0)
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
                  <Item props={item} key={index} clickOrder={clickOrder} />)
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Body
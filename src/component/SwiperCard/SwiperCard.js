import React from 'react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import { productImages } from '../../img'
import ProductImages from './ProductImages'
const SwiperCard = () => {
  return (
    <div>
        <ProductImages images={productImages}/>
    </div>
  )
}

export default SwiperCard
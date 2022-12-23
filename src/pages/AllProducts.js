import React, { useState } from 'react'
import AllProductCatalog from '../component/allProductCatalog/AllProductCatalog'
import AllProductTop from '../component/AllProductTop/AllProductTop'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

const AllProducts = () => {
    return (
        <div className='flex-1' style={{ minHeight: '100vh' }}>
        
            <AllProductTop />
            <AllProductCatalog />
            
        </div>
    )
}

export default AllProducts
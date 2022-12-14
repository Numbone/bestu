import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Thumbs } from 'swiper'

const ProductImages = props => {
    
    return (
        <>
            <Swiper
            Loop={true}
            pagination={true}
            spaceBetween={10}
            modules={[Thumbs,Pagination]}
            grabCursor={true}
            >
                {
                    props.images==undefined?<div></div>
                    :props.images.map((item,index)=>(
                        <SwiperSlide>
                            <img src={item} style={{
                                objectFit: "cover",
                                width: "100%",
                                height:"100%",
                                
                                
                            }} alt="SliderImage"></img>
                    
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

ProductImages.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImages
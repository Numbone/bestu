import React, { useContext, useEffect, useState } from 'react'
import btop from '../img/spatop.jpg'
import Item from '../component/Item/Item'
import { productCategory } from '../api/product'
import {Context} from "../"
const Spa = () => {
    const [product, setProduct] = useState({})
    const {lang}=useContext(Context)
    const getAllProducts = async () => {
        try {
            const { data } = await productCategory("spa",lang.lang)
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
    const { basket } = useContext(Context)
    const clickOrder = (id) => {
      basket.setBasket(id)
  
  }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <>
            <div className='block-top category' style={{ backgroundImage: `url(${btop})` }}>
                <div className='d-flex justify-content-center'>
                    <div className='container'>
                        <div className='block-top__big-name'>
                            Le mousse
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='block__title text-center'>
                        <p>Каталог</p>
                    </div>
                    <div className='block-catalog__items'>
                        <div className='row g-2 g-md-4'>
                            {product?.length === undefined | null
                                ? <div></div>
                                : product.map((item, index) =>
                                    <Item props={item} key={index} clickOrder={clickOrder} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spa
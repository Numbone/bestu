import React, { useEffect, useState } from 'react'
import '../allProductCatalog/AllProductcatalog.css'

import Item from '../Item/Item'
import { productAll, productAvailable } from '../../api/product'


const AvailableProduct = () => {
    const [product, setProduct] = useState({})
    const prev = '<'
    const next = '>'
    const getAllProducts = async () => {
        try {
            const { data } = await productAvailable()   
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    console.log(product,"productAllItems")
    console.log(product[5]?.Action?.split(new RegExp("/n")))
    return (
        <>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='block__title text-center'>
                        Каталог
                    </div>
                    <div className='block-catalog__items'>
                        <div className='row gy-4 gx-2 g-md-4'>
                            {product.length==undefined
                            ?<div></div>
                            :product.map((item,index)=>
                                    <Item props={item} key={index} />  )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a className='page-link'>{prev}</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>1</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>2</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>{next}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AvailableProduct
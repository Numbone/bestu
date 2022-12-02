import React, { useEffect, useState } from 'react'
import '../allProductCatalog/AllProductcatalog.css'
import ph1 from '../../img/all1.png'
import ProductImages from '../SwiperCard/ProductImages'
import { productImages, productImages1 } from '../../img'
import Item from '../Item/Item'
import { productAll } from '../../api/product'
const AllProductCatalog = () => {
    const [product, setProduct] = useState({})
    const prev = '<'
    const next = '>'
    const getAllProducts = async () => {
        try {
            const { data } = await productAll()
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    console.log(product)
    return (
        <>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='block__title text-center'>
                        Каталог
                    </div>
                    <div className='block-catalog__items'>
                        <div className='row gy-4 gx-2 g-md-4'>
                            {/* <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item /> */}
                            {product.length==undefined
                            ?<div></div>
                            :product.map((item)=>
                                    <Item props={item}/>  )
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

export default AllProductCatalog
import React, { useContext, useEffect, useState } from 'react'
import '../allProductCatalog/AllProductcatalog.css'

import Item from '../Item/Item'
import { productAll } from '../../api/product'
import { Context } from '../..'
import { observer } from 'mobx-react-lite';

const AllProductCatalog = () => {
    const [product, setProduct] = useState({})
    const prev = '<'
    const next = '>'
    const { basket } = useContext(Context)
    const [order, setOrder] = useState({})
    const clickOrder = (id) => {
        basket.setBasket(id)

    }
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
    console.log(product, "productAllItems")
    
    console.log(basket.Basket,"basket");
    return (
        <>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='block__title text-center'>
                        Каталог
                    </div>
                    <div className='block-catalog__items'>
                        <div className='row gy-4 gx-2 g-md-4'>
                            {product.length == undefined
                                ? <div></div>
                                : product.map((item, index) =>
                                    <Item props={item} key={index} clickOrder={clickOrder} />)
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

export default observer(AllProductCatalog)
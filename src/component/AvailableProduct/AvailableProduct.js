import React, { useContext, useEffect, useState } from 'react'
import '../allProductCatalog/AllProductcatalog.css'

import Item from '../Item/Item'
import {  productAvailable } from '../../api/product'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'


const AvailableProduct = () => {
    const [product, setProduct] = useState({})
    const prev = '<'
    const next = '>'
    const {lang}=useContext(Context)
    const getAllProducts = async () => {
        try {
            const { data } = await productAvailable(lang.lang)   
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
                            {product.length===undefined
                            ?<div></div>
                            :product.map((item,index)=>
                                    <Item props={item} key={index+1} />  )
                            }
                        </div>
                    </div>
                </div>
            </div>
           {/* <div className='container'>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <NavLink to='/avaliable' className='page-link'>{prev}</NavLink>
                        </li>
                        <li className='page-item'>
                            <NavLink to='/avaliable' className='page-link'>1</NavLink>
                        </li>
                        <li className='page-item'>
                            <NavLink to='/avaliable' className='page-link'>2</NavLink>
                        </li>
                        <li className='page-item'>
                            <NavLink to='/avaliable' className='page-link'>{next}</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>*/} 
        </>
    )
}

export default AvailableProduct
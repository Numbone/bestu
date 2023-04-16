import React, { useContext, useEffect, useState } from 'react'
import '../allProductCatalog/AllProductcatalog.css'

import Item from '../Item/Item'
import {  productAvailable } from '../../api/product'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import ModalItem from '../ModalItem/ModalItem'


const AvailableProduct = () => {
    const [active, setActive] = React.useState(false)
    const [indexPhoto, setIndexPhoto] = useState(0)
    const [product, setProduct] = useState({})
    // const prev = '<'
    // const next = '>'
    const {lang,basket}=useContext(Context)
    const clickOrder = (id) => {
        basket.setBasket(id)

    }
    const getAllProducts = async () => {
        try {
            const { data } = await productAvailable(lang.lang)   
            setProduct(data.product)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
 
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
                                    <Item 
                                    props={item}
                                    key={index}
                                    id={item.id}
                                    clickOrder={clickOrder}
                                    setIndexPhoto={setIndexPhoto}
                                    active={active}
                                    setActive={setActive}
                                    index={index}
                                     />  )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ModalItem active={active} setActive={setActive}>
              <div className="toastjs-container">
                <div className="toastjs success">
                  <p>
                  {
                      lang.lang==="ru"?
                      product===null ?null
                      :product[indexPhoto] ===undefined  ? null :product[indexPhoto]?.name_ru
                      :
                      product===null ?null
                      :product[indexPhoto] ===undefined  ? null :product[indexPhoto]?.name_en
                    }
                    
                  </p>
                  <div className="d-flex">

                    <button type="button" className="toastjs-btn toastjs-btn--custom" onClick={() => setActive(false)}>
                      <NavLink to='/order' style={{ color: '#fff' }}>Оформить заказ </NavLink>
                    </button>


                    <button type="button" className="toastjs-btn toastjs-btn--close" onClick={() => setActive(false)}>
                      Ок
                    </button>

                  </div>
                </div>
              </div>

            </ModalItem>
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
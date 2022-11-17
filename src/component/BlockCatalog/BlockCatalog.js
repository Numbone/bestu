import React from 'react'
import Item from '../../store/Image'
import "../BlockCatalog/BlockCatalog.css"
import ps from "../../img/1.jpg"
import ps2 from "../../img/2.jpg"
import ps3 from "../../img/3.jpg"
import ps4 from "../../img/4.jpg"
import ps5 from "../../img/5.jpg"
import { NavLink } from 'react-router-dom'

const BlockCatalog = () => {
    return (
        <div className='block-catalog'>
            <div className='container'>
                <div className='block__title text-center'>
                    <NavLink to='/all_products'>Смотреть все товары</NavLink>
                    <br></br>
                    <br></br>
                    <NavLink to='/all_products2'>Сейчас в наличии</NavLink>
                </div>
                <div className='block-catalog__items'>
                    <div className='row g-2 g-md-4'>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps}")`
                                }}>
                                <NavLink to='/body' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title '>
                                        body
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps2}")`
                                }}>
                                <NavLink to='/beauty' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title '>
                                        beauty
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps3}")`
                                }}>
                                <NavLink to='/spa' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title ' 
                                    style={{position:'relative',bottom:'60px'}}>
                                        SPA
                                    </span>
                                    <span className='block-catalog__item-subtitle'
                                   >
                                        (большие объёмы продукции
                                        <br></br>
                                        для SPA-салонов и бьюти-мастеров)
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps4}")`
                                }}>
                                <NavLink to='/vouchers' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title block-catalog__item-title--montserrat '>
                                        Подарочные сертификаты
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps5}")`
                                }}>
                                <NavLink to='/packaging' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title block-catalog__item-title--montserrat '>
                                        Упаковка
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockCatalog